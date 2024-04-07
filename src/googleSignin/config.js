// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMCkVWqcIh-sOIQSTKjxdq1V_Q7xdWaKw",
  authDomain: "campus-connect-7b6c0.firebaseapp.com",
  projectId: "campus-connect-7b6c0",
  storageBucket: "campus-connect-7b6c0.appspot.com",
  messagingSenderId: "461591747004",
  appId: "1:461591747004:web:341269c8f45b9b7250b3b9",
  measurementId: "G-TZTXJETZ7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};