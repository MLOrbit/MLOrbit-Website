// src/login/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import {
  emailLogin,
  emailSignup,
  googleLogin,
  facebookLogin,
  resetPassword,
} from "./AuthService";

/**
 * Creates a context for authentication.
 */
const AuthContext = createContext();

/**
 * Custom hook to use the AuthContext.
 * @returns {Object} - The authentication context value.
 */
export const useAuth = () => {
  return useContext(AuthContext);
};

/**
 * AuthProvider component to wrap around your app and provide auth state.
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {JSX.Element} - The provider component.
 */
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Handles changes in authentication state.
   */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  /**
   * Logs in a user using email and password.
   * @param {string} email - User's email address.
   * @param {string} password - User's password.
   * @param {boolean} rememberMe - If true, persists the user's session locally.
   * @returns {Promise<Object>} - The authenticated user object.
   */
  const login = (email, password, rememberMe) => {
    return emailLogin(email, password, rememberMe);
  };

  /**
   * Signs up a new user using email and password.
   * @param {string} email - User's email address.
   * @param {string} password - User's password.
   * @returns {Promise<Object>} - The newly created user object.
   */
  const signup = (email, password) => {
    return emailSignup(email, password);
  };

  /**
   * Logs in a user using Google OAuth.
   * @returns {Promise<Object>} - The authenticated user object.
   */
  const loginWithGoogle = () => {
    return googleLogin();
  };

  /**
   * Logs in a user using Facebook OAuth.
   * @returns {Promise<Object>} - The authenticated user object.
   */
  const loginWithFacebook = () => {
    return facebookLogin();
  };

  /**
   * Sends a password reset email.
   * @param {string} email - User's email address.
   * @returns {Promise<void>} - Resolves when the email is sent.
   */
  const resetUserPassword = (email) => {
    return resetPassword(email);
  };

  const value = {
    currentUser,
    login,
    signup,
    loginWithGoogle,
    loginWithFacebook,
    resetUserPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
