// AuthService.js
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth } from "./firebaseConfig"; // Firebase Auth instance

/**
 * Logs in a user using email and password with optional session persistence.
 * @param {string} email - User's email address.
 * @param {string} password - User's password.
 * @param {boolean} rememberMe - If true, persists the user's session locally.
 * @returns {Promise<Object>} - The authenticated user object.
 */
export const emailLogin = async (email, password, rememberMe = false) => {
  try {
    // Set session persistence: local (remember me) or session (default)
    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return authenticated user
  } catch (error) {
    throw new Error(error.message || "Failed to login with email and password.");
  }
};

/**
 * Registers a new user using email and password.
 * @param {string} email - User's email address.
 * @param {string} password - User's password.
 * @returns {Promise<Object>} - The newly created user object.
 */
export const emailSignup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // Return newly created user
  } catch (error) {
    throw new Error(error.message || "Failed to create account.");
  }
};

/**
 * Logs in a user using Google OAuth.
 * @returns {Promise<Object>} - The authenticated user object.
 */
export const googleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user; // Return authenticated user
  } catch (error) {
    throw new Error(error.message || "Google login failed.");
  }
};

/**
 * Logs in a user using Facebook OAuth.
 * @returns {Promise<Object>} - The authenticated user object.
 */
export const facebookLogin = async () => {
  try {
    const provider = new FacebookAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user; // Return authenticated user
  } catch (error) {
    throw new Error(error.message || "Facebook login failed.");
  }
};

/**
 * Sends a password reset email to the specified email address.
 * @param {string} email - User's email address.
 * @returns {Promise<void>} - Resolves when the email is sent.
 */
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error(error.message || "Failed to send password reset email.");
  }
};
