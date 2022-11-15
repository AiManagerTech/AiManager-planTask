import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

export const authContext = createContext();

// Hook to not import the authcontext in each component
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is no AuthProvider');
  return context;
};

export function AuthProvider({ children }) {
  // user data
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // LogIn
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // LogOut
  const logout = () => signOut(auth);

  // Google Login
  const loginWhitGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // Facebook Login
  const loginWhitFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };

  // Reset Password
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  // Save user Data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWhitGoogle,
        loginWhitFacebook,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
