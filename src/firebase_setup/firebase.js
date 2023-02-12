// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1T-2EFV0vUfp6EBs6ORlPtqT7k1-Z9II",
  authDomain: "frontendavansat.firebaseapp.com",
  projectId: "frontendavansat",
  storageBucket: "frontendavansat.appspot.com",
  messagingSenderId: "417736443600",
  appId: "1:417736443600:web:ca334822e739430e7480d5",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = getAuth(app);

// export { db, auth };
