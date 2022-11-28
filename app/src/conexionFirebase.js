// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfuSYatZ5hG67jbv2kIP9yDAIwsvGPk_s",
  authDomain: "cursoreact-e9983.firebaseapp.com",
  projectId: "cursoreact-e9983",
  storageBucket: "cursoreact-e9983.appspot.com",
  messagingSenderId: "599793330441",
  appId: "1:599793330441:web:05049c7c16a7cbb889cbd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); //Firestore