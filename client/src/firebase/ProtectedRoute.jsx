// Dependences
import { Fragment } from 'react';
import { useAuth } from './authContext';
import { Navigate } from 'react-router-dom';

// JSX
export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <p>loading</p>;
  if (!user) return <Navigate to="/signin" />;

  return <Fragment>{children}</Fragment>;
}

export default ProtectedRoute;
