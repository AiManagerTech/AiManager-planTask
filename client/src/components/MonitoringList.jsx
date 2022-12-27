// Dependencies
import React, { Fragment, useState, useEffect } from 'react';

// Components
import GoogleFormIframe from '../components/GoogleFormIframe';

const MonitoringList = ({ data, brand, subsidiary }) => {
  const [hasLoaded, setHasLoaded] = useState();
  const [showMonitoring, setShowMonitoring] = useState(true); // Show list of monitoring to select (true) or show selected monitoring (false)
  const [listOfMonitorings, setListOfMonitorings] = useState();
  const [selectedMonitoring, setSelectedMonitoring] = useState();

  // Funtion to filter monitorings by subsidiary and brand
  useEffect(() => {
    filterSubsidiaries(data, brand, subsidiary);
    setHasLoaded(true);
  }, [subsidiary]);

  // Show selected MonitoringList
  function showSelectedMonitoring(monitoring) {
    // console.log('monitoring: ', monitoring);
    setSelectedMonitoring(monitoring);
    monitoring ? setShowMonitoring(false) : setShowMonitoring(true);
  }

  // Filter data by brand and subsidiary
  function filterSubsidiaries(data, brand, subsidiary) {
    let result = [];
    data.map((monitoring) => {
      if (
        monitoring.brand.name === brand &&
        monitoring.subsidiary === subsidiary
      ) {
        result.push(monitoring);
      }
    });
    setListOfMonitorings(result);
  }

  console.log('listOfMonitorings: ', listOfMonitorings);

  return hasLoaded ? (
    <Fragment>
      {/* Show list of monitoring to select */}
      {showMonitoring &&
        listOfMonitorings.map(
          (monitoring, key) =>
            monitoring && (
              <div
                className="w-full flex flex-col justify-center items-center bg-gray-500 border border-white shadow-lg rounded-t-sm cursor-pointer hover:bg-gray-600 text-2xl text-white"
                key={key}
                onClick={() => showSelectedMonitoring(monitoring)}
              >
                {monitoring.monitoring.title}
              </div>
            )
        )}
      {/* Show Selected Monitoring */}
      {!showMonitoring && (
        <div className="w-full flex flex-col justify-center items-center bg-green-500 border border-white shadow-lg rounded-t-sm cursor-pointer hover:bg-green-600 text-2xl">
          {selectedMonitoring.monitoring.title}
        </div>
      )}
      {/* Show Google form Iframe */}
      {!showMonitoring && (
        <div>
          {console.log(selectedMonitoring.monitoring.googleFormLink)}
          <GoogleFormIframe
            googleFormLink={selectedMonitoring.monitoring.googleFormLink}
          />
        </div>
      )}
    </Fragment>
  ) : (
    <Fragment>
      <p className="text-white">Loading...</p>
    </Fragment>
  );
};

export default MonitoringList;
