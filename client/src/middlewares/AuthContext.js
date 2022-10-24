// Dependencies
import React, { useContext, useState, useRef, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, where, query, getDocs, addDoc, doc, setDoc, deleteDoc, orderBy } from 'firebase/firestore';
import firebaseconfig from '../firebaseconfig';

// Creating Auth and Database entities for export inside the context
const fire = initializeApp(firebaseconfig);
const fire2 = initializeApp(firebaseconfig,"second");
const auth = getAuth(fire);
const auth2 = getAuth(fire2);
const db = getFirestore();

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // Auth
  const [currentUser, setCurrentUser] = useState();
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  // Subscriptions
  const unsubscribe1Ref = useRef();
  const unsubscribe2Ref = useRef();
  // Agendas
  const [fullAgenda, setFullAgenda] = useState([]);
  const [clientAgenda, setClientAgenda] = useState([]);
  const [workerAgenda, setWorkerAgenda] = useState([]);
  const [userContact, setUserContact] = useState([]);
  const [company, setCompany] = useState({});
  // DragAndDrop relative
  const [isUploading, setIsUploading] = useState(false);

  async function createUserCredentials(email, password) {
    try {
      let userCredential = await createUserWithEmailAndPassword(auth2, email, password)
      auth2.signOut();
      console.log("User login credential created ID: " + userCredential.user.reloadUserInfo.localId);
      return userCredential.user.reloadUserInfo.localId;
    } catch (error) {
      throw error;
    }
  }

  function login(email, password) {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  }

  function logout() {
    if (unsubscribe2Ref.current) unsubscribe2Ref.current();
    return auth.signOut();
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function getAgendaData(user) {
    // Retriving agenda
      const agendaQuery = query(collection(db, 'agenda'),  orderBy("Name"));
      unsubscribe2Ref.current = onSnapshot(agendaQuery, (data) => {
        let agenda = [];
        data.forEach((querySnapshot) => agenda.push({ ...querySnapshot.data(), FireId: querySnapshot.id }));
        //escribiendo los 3 arrays a exportar en el contexto
        setFullAgenda(agenda);
        setClientAgenda(agenda.filter((contact) => contact.Rol === "Cliente"));
        setWorkerAgenda(agenda.filter((contact) => contact.Rol !== "Cliente"));
        setUserContact(() => {
          let userAgenda = agenda.filter((contact) => contact.LoginID === user.uid);
          if (userAgenda[0])
            return userAgenda[0];
            else
            return false;
        });
      });
  }
  
  const getCompanyData = async () => {
    const q = query(collection(db, 'company'), where("Name", "==", "Medina Architecture")); //delete where to get all company
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((company) => setCompany({ ...company.data(), FireId: company.id }));
  }

  useEffect(() => {
    unsubscribe1Ref.current = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        auth.currentUser.getIdTokenResult().then((idTokenResult) => {
          if(idTokenResult.claims.admin){
            setIsUserAdmin(idTokenResult.claims.admin);
            console.log("Is admin: " + idTokenResult.claims.admin);
            setLoading(false); //start drawing childrens app
          } else {
            setIsUserAdmin(false);
            console.log("Is admin: " + false);
            setLoading(false); //start drawing childrens app
          }
        });
        getAgendaData(user)
        getCompanyData();
      } else {
        setIsUserAdmin(false);
        console.log("Is admin: " + false);
        setLoading(false); //start drawing childrens app
      }
    });
    //unsubscribe to the observable on destroy
    return function cleanup() {
      if (unsubscribe1Ref.current) unsubscribe1Ref.current();
      if (unsubscribe2Ref.current) unsubscribe2Ref.current();
    };
  }, []);


  // FUNTION TO CREATE NEW DOCUMENTS
  async function dbDocumentCreate(firebaseCollection, document) {
    console.log('Function to create a new document in the DB...');
    try {
      const docRef = await addDoc(collection(db, firebaseCollection),document);
      console.log('Document create in the DB with ID: ', docRef.id);
      return docRef.id;
    } catch(error) {
      console.log(error);
      return error;
    }
  }

  // FUNTION TO DELETE DOCUMENTS
  async function dbDocumentDelete(firebaseCollection, document) {
    console.log('Function to delete a document in the DB...');
    try {
      await deleteDoc(doc(db, firebaseCollection, document.FireId));
      console.log('Document deleted from the DB!');
      return "deleted";
    } catch(error) {
      console.log(error);
      return "error";
    }
  }

  // FUNTION TO MODIFY KEY VALUE FROM DOCUMENT
  async function dbDocumentModify(collection, documentId, keysAndValues, mergeValue ){
    console.log('Function to modify keys and values from a document in the DB...');
    try {
      if (mergeValue === undefined) mergeValue = true;
      console.log("mergeValue: "+mergeValue);
      const documentRef = doc(db, collection, documentId);
      await setDoc(documentRef, keysAndValues, { merge: mergeValue });
      console.log('Document modify from the DB!');
      return "success";
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //EXPORTS
  const value = {
    currentUser, isUserAdmin, userContact, fullAgenda, workerAgenda, clientAgenda, company, isUploading,
    setIsUploading, login, createUserCredentials, logout, resetPassword, updateEmail, updatePassword,
    dbDocumentCreate, dbDocumentDelete, dbDocumentModify,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
