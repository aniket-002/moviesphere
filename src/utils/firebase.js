// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAKjVNZXubDdzu6h6MizIcZ1j0tPhq284",
  authDomain: "movie-sphere-63e3e.firebaseapp.com",
  projectId: "movie-sphere-63e3e",
  storageBucket: "movie-sphere-63e3e.appspot.com",
  messagingSenderId: "60882089975",
  appId: "1:60882089975:web:cdf2c5614e5a4cc0c1a0f2",
  measurementId: "G-56XZL046GW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();