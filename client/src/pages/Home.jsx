// Dependencies
import React, { Fragment, useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';

// Authentification on Firebase
import { useAuth } from '../firebase/authContext';

//  Database
import db from '../firebase/firebaseConfig';

// Components
import GoogleFormIframe from '../components/GoogleFormIframe';

// Main function
const Home = () => {
  // User data
  const { user } = useAuth();

  // States
  const [hasLoaded, setHasLoaded] = useState(false);
  const [monitoringData, setMonitoringData] = useState({});
  const [googleFormLink, setGoogleFormLink] = useState({});

  // Get Surveys from database who match with QR code
  useEffect(() => {
    try {
      const getData = async () => {
        const monitoringRef = query(collection(db, 'monitoring'));
        const querySnapshot = await getDocs(monitoringRef);
        querySnapshot.forEach((monitor) => {
          setMonitoringData(monitor.data());
          setGoogleFormLink(monitor.data().monitoring.googleFormLink);
          setHasLoaded(true);
        });
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const googleFormTitle = 'http://localhost:6576/';
  const googleFormSubsidiary = 'Centro Palma';
  console.log('Base de datos: ', db);
  console.log('googleFormLink: ', googleFormLink);

  return hasLoaded ? (
    // JSX
    <Fragment>
      <div className="flex flex-col items-center justify-center h-full text-white">
        <p>Home Page: {user.displayName || user.email}</p>
        <p>User UID: {user.uid || 'no tiene UID'}</p>
        {googleFormLink && <p>Google form ID: {googleFormLink}</p>}
        {/* Google Form */}
        <GoogleFormIframe googleFormLink={googleFormLink} />
      </div>
    </Fragment>
  ) : (
    // TODO: Impruve this loading screen
    <p>loading...</p>
  );
};
export default Home;
