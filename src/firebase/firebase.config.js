// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId, 
  // storageBucket: process.env.REACT_APP_storageBucket, 
  // messagingSenderId: process.env.REACT_APP_messagingSenderId, 
  // appId: process.env.REACT_APP_appId,




  apiKey: "AIzaSyDuXLNF3EmHcvh1EegsQQrOFg5X1s-RsDw",
  authDomain: "doctors-portal-2e980.firebaseapp.com",
  projectId: "doctors-portal-2e980",
  storageBucket: "doctors-portal-2e980.appspot.com",
  messagingSenderId: "19690052749",
  appId: "1:19690052749:web:610d1030ec545248e316c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;