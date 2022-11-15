// Dependences
import React, { useState, useRef, Fragment } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import getLocation from '../funtions/getLocation';

// Media
import GenericSurveyImg from '../images/genericSurvey.png';

const InvalidSubsidiary = (props) => {
  const { TypeformLink } = props;
  console.log('TypeformLink por props:', TypeformLink);

  // Funtions --> Falta sguardar los datos en Firebase
  // let { lat, lng, status } = getLocation;
  // console.log('lat, lng, status:', lat, lng, status);

  const HandleClick = () => {
    console.log(jp);
    // this
  };

  // JSX
  return (
    <Fragment>
      <div className="w-full flex flex-col justify-between h-screen text-center">
        {/* Image */}
        <div className="grow w-full">
          <div className="flex justify-center items-center h-full">
            <img
              className="object-cover sm:w-1/2 md:w-1/3"
              src={GenericSurveyImg}
              alt="current location"
            />
          </div>
        </div>
        {/* Title */}
        <div className="flex-none pb-20">
          <h1 className="title">El QR es inválido.</h1>
        </div>
        {/* Sub-title */}
        {/* <div className="flex-none">
          <p className="subTitle">
            Acá vamos a mostrar otros formularios del mismo cliente si tiene
          </p>
        </div> */}
        {/* actions */}
        {/* <div className="flex-none py-8">
          <div className="flex justify-around">
            <div>
              <p className="text-sm text-orange-500 text-center">
                Nombre del formulario
              </p>
              <p>hablar de la recompensa</p>
            </div>
            <div>
              <p className="text-sm text-orange-500 text-center">
                Nombre del formulario
              </p>
              <p>hablar de la recompensa</p>
            </div>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
};

export default InvalidSubsidiary;
