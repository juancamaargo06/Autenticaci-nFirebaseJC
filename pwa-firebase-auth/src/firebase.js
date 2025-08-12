// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBbimuSonrWKm3dsTAAzunP3Oz17xaDNPM",
  authDomain: "autentificacionjc.firebaseapp.com",
  projectId: "autentificacionjc",
  storageBucket: "autentificacionjc.firebasestorage.app",
  messagingSenderId: "528582542322",
  appId: "1:528582542322:web:dd00dff962d0a09c7f216b",
  measurementId: "G-5JMR2TV7H4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
const registerWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
const logout = () => signOut(auth);

const googleProvider = new GoogleAuthProvider();
const loginWithGoogle = () => signInWithPopup(auth, googleProvider);

export {
  app,
  analytics,
  auth,
  loginWithEmail,
  registerWithEmail,
  logout,
  loginWithGoogle
};
