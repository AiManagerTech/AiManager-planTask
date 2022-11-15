// Dependencies
import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Header from '../components/Header';

// Main function
const Layout = () => {
  return (
    // JSX
    <div className="overflow-hidden h-screen bg-gradient-to-b from-black to-blue-900">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className=" h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
