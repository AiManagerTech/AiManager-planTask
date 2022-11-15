// Dependencies
import React, { Fragment } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ProtectedRoute } from './firebase/ProtectedRoute';

// Components
import Layout from './pages/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import NotFoundPage from './pages/NotFoundPage';

// Styles
import './css/customStyles.css';

// Media

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <p>MainPage</p>
      {/* <Routes> */}
      {/* Landing */}
      {/* <Route exact path="/" element={<ProtectedRoute></ProtectedRoute>}> */}
      {/* <Route index element={<Home />} /> */}
      {/* <Route exact path="signin" element={<SignIn />} /> */}
      {/* <Route exact path="signup" element={<SignUp />} /> */}
      {/* <Route exact path="reset-password" element={<ResetPassword />} /> */}
      {/* 404 Last route */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      {/* </Route> */}
      {/* 404 rounte */}
      {/* </Routes> */}
    </Fragment>
  );
}

export default App;
