// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPjF9ujr8-xqtqTn7S4n9lSrwuJuP9v0w",
  authDomain: "seven-works.firebaseapp.com",
  projectId: "seven-works",
  storageBucket: "seven-works.firebasestorage.app",
  messagingSenderId: "781370327017",
  appId: "1:781370327017:web:0a9fadcf6de732a76f5578",
  measurementId: "G-YVJS29ZSLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
export { app, auth };