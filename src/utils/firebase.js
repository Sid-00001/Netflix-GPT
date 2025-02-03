// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoiIs5XMMYBAReU0vG8ugnqig7Sn54NVw",
  authDomain: "netflix-d47c0.firebaseapp.com",
  projectId: "netflix-d47c0",
  storageBucket: "netflix-d47c0.firebasestorage.app",
  messagingSenderId: "1063324107933",
  appId: "1:1063324107933:web:28c5183df98844e4530074",
  measurementId: "G-F6KQK8PXN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();