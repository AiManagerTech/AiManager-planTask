// Dependences
import React, { Fragment } from 'react';

// Components

// Media
import Error404Img from '../images/404_Page_not_found.png';

const NotFoundPage = () => {
  return (
    <Fragment>
      <div className="flex justify-center">
        <img className="pt-32 pb-12" src={Error404Img} alt="Error 404" />
      </div>
      <div className="flex justify-center pb-12">
        <p>No hay nada en esta url.</p>
      </div>
    </Fragment>
  );
};
export default NotFoundPage;
