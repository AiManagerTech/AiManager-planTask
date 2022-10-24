// Dependencies
import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

// Components
// Media
// Middlewares
// Styles

const App = () => {
  // const location = useLocation();

  return (
    <Fragment>
      <CookiesProvider>
        <Outlet />
      </CookiesProvider>
    </Fragment>
  );
};

export default App;
