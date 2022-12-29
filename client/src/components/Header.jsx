// Dependences
import React, { Fragment, useEffect, useContext } from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GolbalContext';
import { MdTouchApp } from 'react-icons/md';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid';

// Authentification on Firebase
import { useAuth } from '../firebase/authContext';

// Main function
const Header = () => {
  // Location
  const location = useLocation();

  // Context
  const { title, iconTitle } = useContext(GlobalContext);
  console.log('Context title: ', title);

  // useEffect(() => {
  //   getTitle();
  // }, []);

  // User data
  const { user } = useAuth();
  // console.log('location: ', location.pathname);
  // console.log('user: ', user);

  // JSX
  return (
    <Fragment>
      <div className="flex flex-row justify-between">
        {/* Left side */}
        <div className="flex flex-row items-center justify-center">
          {{
            // Swich type.
            '/': (
              <Link to="/">
                <Bars3BottomLeftIcon className="text-black w-12 sm:w-14 md:w-16 mx-4" />
              </Link>
            ),
            '/user-preferences': (
              <Link to="/">
                <Bars3BottomLeftIcon className="text-black w-12 sm:w-14 md:w-16 mx-4" />
              </Link>
            ),
          }[location.pathname] || console.log('No location patch')}
        </div>
        {/* Center */}
        <div className="flex flex-row items-center justify-center w-full">
          {/* Todo: changue title using global variable */}
          <p className="title flex p-0 text-center text-gray-800">
            <MdTouchApp /> {title}
          </p>
        </div>
        {/* Right side */}
        <div className="flex flex-row items-center justify-center w-24 sm:w-28 md:w-30 p-4">
          {/* User */}
          {user.photoURL && (
            <Link to="/user-preferences">
              <img
                src={user.photoURL || 'https://picsum.photos/200'}
                alt="user"
                className="rounded-full aspect-square border-2 border-white shadow inline-block"
              />
            </Link>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
