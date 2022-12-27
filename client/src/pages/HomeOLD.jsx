// Dependencies
import React, { Fragment, useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';

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
  const [monitoringData, setMonitoringData] = useState();
  const [listOfBrandsUnique, setListOfBrandsUnique] = useState();
  const [showBrands, setShowBrands] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState('');

  // Show selected brand
  function showSelectedBrandUnique(brand) {
    setSelectedBrand(brand);
    console.log('showSelectedBrandUnique():' + brand);
    setShowBrands(false);
    filterSelectedBrands(brand);
  }

  // Get brands to show
  function filterSelectedBrands(brand) {
    console.log('filterSelectedBrands():' + monitoringData[0]);
    // const brands = monitoringData.filter();
  }

  // Get data from database
  // Todo: filter by user
  useEffect(() => {
    try {
      const getData = async () => {
        const monitoringRef = query(collection(db, 'monitoring'));
        const querySnapshot = await getDocs(monitoringRef);
        var data = [];
        var listOfBrands = [];
        querySnapshot.forEach((monitor) => {
          console.log(monitor.id, ' => ', monitor.data());
          data.push(monitor.data());
          listOfBrands.push(monitor.data().brand.name);
        });
        setMonitoringData(data);
        setListOfBrandsUnique([...new Set(listOfBrands)]);
        setHasLoaded(true);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log('monitoringData', monitoringData);
  console.log('listOfBrandsUnique', listOfBrandsUnique);

  return hasLoaded ? (
    // JSX
    <Fragment>
      {/* Flow */}
      {/* 1º View List of Brands [if value==1 go to List of sucursales view] */}

      <div className="grid grid-cols-1 gap-1 mx-4">
        {/* Show list of brand to select */}
        {showBrands &&
          listOfBrandsUnique.map(
            (brand, key) =>
              brand && (
                <div
                  className="w-full flex flex-col justify-center items-center bg-gray-500 border border-white shadow-lg rounded-t-sm cursor-pointer hover:bg-gray-600 text-2xl text-white"
                  key={key}
                  onClick={() => {
                    showSelectedBrandUnique(brand);
                  }}
                >
                  {brand}
                </div>
              )
          )}
        {/* Show selected brand */}
        {!showBrands && (
          <div className="w-full flex flex-col justify-left items-center bg-gray-500 border border-white shadow-lg rounded-t-sm cursor-pointer hover:bg-gray-600 text-2xl">
            {selectedBrand}
          </div>
        )}
      </div>
      {/* 2º View List of sucursales [if value==1 go to forms view][with actives forms][Order by location] */}
      {/* 3º View List of forms [if value==1 start form] */}

      <div className="flex flex-col items-center justify-center h-full text-white">
        <p>Home Page: {user.displayName || user.email}</p>
        <p>User UID: {user.uid || 'no tiene UID'}</p>
        {/* {googleFormLink && <p>Google form ID: {googleFormLink}</p>} */}
        {/* Google Form */}
        {/* <GoogleFormIframe googleFormLink={googleFormLink} /> */}
      </div>
    </Fragment>
  ) : (
    // TODO: Impruve this loading screen
    <p>loading...</p>
  );
};
export default Home;
