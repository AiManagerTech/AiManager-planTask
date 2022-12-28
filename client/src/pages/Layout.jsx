// Dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Header from '../components/Header';

// Main function
const Layout = () => {
  return (
    // JSX
    <div className="overflow-hidden h-screen lg:max-w-screen-sm lg:mx-auto  flex flex-col justify-center bg-gradient-to-b from-gray-200 to-white">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
