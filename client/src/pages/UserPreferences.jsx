// Dependences
import React, { Fragment } from 'react';

// Components
import Logout from '../components/Logout';

// Main function
const UserPreferences = () => {
  return (
    <Fragment>
      <div className="flex flex-col justify-end m-4">
        <div className="flex justify-end p-4 border-t border-b border-white">
          <p className="text-white">Otro</p>
        </div>
        <Logout />
      </div>
    </Fragment>
  );
};

export default UserPreferences;
