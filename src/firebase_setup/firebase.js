// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe-m4tfG4MptRf8VLCqFkJ0qr5rPVbl3I",
  authDomain: "front-end-avansat.firebaseapp.com",
  projectId: "front-end-avansat",
  storageBucket: "front-end-avansat.appspot.com",
  messagingSenderId: "932769236322",
  appId: "1:932769236322:web:72304389a10ac32b99d83b",
  measurementId: "G-4GHRNC6TEH",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = getAuth(app);

// export { db, auth };
