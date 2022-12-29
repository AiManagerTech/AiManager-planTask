// Dependence
import React, { Fragment } from 'react';

// Main function
const GoogleFormIframe = ({ googleFormLink }) => {
  // JSX
  return (
    <Fragment>
      <iframe
        className="w-full h-full"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        src={`https://docs.google.com/forms/d/e/${googleFormLink}/viewform?embedded=true`}
      >
        Cargando formulario…
      </iframe>
    </Fragment>
  );
};

export default GoogleFormIframe;
