// PrivateRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./userDetails/UserContext"; // Adjust the path as necessary

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  // If user is not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated, render the child components
  return children;
};

export default PrivateRoute;
