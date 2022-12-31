// Dependences
import React, { Fragment } from 'react';
import { useAuth } from '../firebase/authContext';

// Main function
const Logout = () => {
  // Logout
  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  // JSX
  return (
    <Fragment>
      <button onClick={handleLogout}>
        <div className="flex justify-end p-4 border-t border-b border-black hover:bg-gray-300">
          <p className="text-black text-xl">Desloguearme</p>
        </div>
      </button>
    </Fragment>
  );
};

export default Logout;
