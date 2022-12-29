// Dependences
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './firebase/ProtectedRoute';
import { ContextProvider } from './context/GolbalContext';
// Authentification
import { AuthProvider } from './firebase/authContext';

// Contexts
// import MainVariablesState from './context/MainVariablesState';

// Components
import Home from './pages/Home';
import Layout from './pages/Layout';
import SignInPage from './pages/SignIn';
import ResetPasswordPage from './pages/ResetPassword';
import UserPreferences from './pages/UserPreferences';
import NotFoundPage from './pages/NotFoundPage';

// Styles
import './index.css';

// console.log(ContextProvider());

// Root container and routes
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    {/* <MainVariablesState> */}
    <BrowserRouter>
      <AuthProvider>
        <ContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Home />} />
              <Route path="/user-preferences" element={<UserPreferences />} />
            </Route>
            <Route path="signin" element={<SignInPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </ContextProvider>
      </AuthProvider>
    </BrowserRouter>
    {/* </MainVariablesState> */}
  </React.StrictMode>
);
