// Dependencies
import React, { Fragment, useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';

// Authentification on Firebase
import { useAuth } from '../firebase/authContext';

//  Database
import db from '../firebase/firebaseConfig';

// Components
import BrandList from '../components/BrandList';

// Main function
const Home = () => {
  // User data
  const { user } = useAuth();

  // States
  const [hasLoaded, setHasLoaded] = useState(false);
  const [monitoringData, setMonitoringData] = useState();
  // States brands
  const [listOfBrandsUnique, setListOfBrandsUnique] = useState();

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
          // console.log(monitor.id, ' => ', monitor.data());
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

  // console.log('monitoringData', monitoringData);
  // console.log('listOfBrandsUnique', listOfBrandsUnique);

  return hasLoaded ? (
    // JSX
    <Fragment>
      <div className="mx-4 h-full">
        {/* Flow 1: Select Brand. (if brand = 1, don't show) */}
        <BrandList
          listOfBrandsUnique={listOfBrandsUnique}
          monitoringData={monitoringData}
        />
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <p className="text-white">Loading...</p>
    </Fragment>
  );
};
export default Home;
