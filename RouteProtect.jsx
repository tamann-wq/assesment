
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function RouteProtect({ children }) {
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}