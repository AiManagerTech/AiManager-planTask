// Dependencies
import React, { Fragment, useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GolbalContext';

// Components
import MonitoringList from './MonitoringList';

// Main function
const SubsidiaryList = ({ data, brand }) => {
  // Context
  const { editTitle } = useContext(GlobalContext);

  // States monitorings
  const [hasLoaded, setHasLoaded] = useState();
  const [showSubsidiaries, setShowSubsidiaries] = useState(true); // Show list of brands to select (true) or show selected brand (false)
  const [selectedSubsidiary, setSelectedSubsidiary] = useState();
  const [listOfSubsidiariesUnique, setListOfSubsidiariesUnique] = useState();

  // Funtion to filter subsidiaries by brand
  useEffect(() => {
    filterSubsidiaries(data, brand);
    setHasLoaded(true);
  }, [brand]);

  // Show selected SubsidiaryList
  function showSelectedSubsidiaryUnique(subsidiary) {
    setSelectedSubsidiary(subsidiary);
    // console.log('setSelectedsubsidiary:' + subsidiary);
    subsidiary ? setShowSubsidiaries(false) : setShowSubsidiaries(true);
    // Edit Title
    subsidiary ? editTitle('Auditorías') : editTitle('Sucursales');
  }

  // Filter data by brand
  function filterSubsidiaries(data, brand) {
    let result = [];
    let subsidiaries = [];
    data.map((subsidiary) => {
      if (subsidiary.brand.name === brand) {
        result.push(subsidiary);
        subsidiaries.push(subsidiary.subsidiary);
      }
    });
    // console.log('result: ', result);
    setListOfSubsidiariesUnique([...new Set(subsidiaries)]);
  }

  // JSX
  return hasLoaded ? (
    <Fragment>
      {/* View List of sucursales [if value==1 go to forms view][with actives forms][Order by location] */}
      {/* Show list of Subsidiary to select */}
      {showSubsidiaries &&
        listOfSubsidiariesUnique.map(
          (subsidiary, key) =>
            subsidiary && (
              <div
                className="w-full btn-outlet"
                key={key}
                onClick={() => showSelectedSubsidiaryUnique(subsidiary)}
              >
                {subsidiary}
              </div>
            )
        )}
      {/* Show selected subsidiary */}
      {!showSubsidiaries && (
        <div
          className="w-full btn-selected"
          onClick={() => showSelectedSubsidiaryUnique()}
        >
          {selectedSubsidiary}
        </div>
      )}

      {/* Flow 3: Select Monitoring. (if monitoring = 1, don't show) */}
      {selectedSubsidiary && (
        <MonitoringList
          data={data}
          brand={brand}
          subsidiary={selectedSubsidiary}
        />
      )}
    </Fragment>
  ) : (
    <Fragment>
      <p className="text-white">Loading...</p>
    </Fragment>
  );
};

export default SubsidiaryList;
