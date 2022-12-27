// Dependencies
import React, { Fragment, useState, useEffect } from 'react';

// Components
import MonitoringList from './MonitoringList';

// Main function
const SubsidiaryList = ({ data, brand }) => {
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
      {/* 2º View List of sucursales [if value==1 go to forms view][with actives forms][Order by location] */}
      <div className="grid grid-cols-1 gap-1 mx-4">
        {/* Show list of Subsidiary to select */}
        {showSubsidiaries &&
          listOfSubsidiariesUnique.map(
            (subsidiary, key) =>
              subsidiary && (
                <div
                  className="w-full flex flex-col justify-center items-center bg-gray-500 border border-white shadow-lg rounded-t-sm cursor-pointer hover:bg-gray-600 text-2xl text-white"
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
            className="w-full flex flex-col justify-left items-center bg-green-500 border border-white shadow-lg rounded-t-sm cursor-pointer hover:bg-green-600 text-2xl"
            onClick={() => showSelectedSubsidiaryUnique()}
          >
            {selectedSubsidiary}
          </div>
        )}

        {/* MonitoringList */}
        {selectedSubsidiary && (
          <MonitoringList
            data={data}
            brand={brand}
            subsidiary={selectedSubsidiary}
          />
        )}
      </div>
    </Fragment>
  ) : (
    <p className="text-white">Loading...</p>
  );
};

export default SubsidiaryList;
