// Dependence
import React, { Fragment } from 'react';

// Main function
const GoogleFormIframe = ({ googleFormLink }) => {
  // JSX
  return (
    <Fragment>
      <iframe
        className="w-full h-full"
        src={`https://docs.google.com/forms/d/e/${googleFormLink}/viewform?embedded=true`}
      >
        Cargando formulario…
      </iframe>
    </Fragment>
  );
};

export default GoogleFormIframe;
