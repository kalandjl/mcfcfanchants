// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByrcUgER6GSSg-fdnrTwZgYhXKk9LNpt4",
  authDomain: "mcfcfanchants-2fece.firebaseapp.com",
  projectId: "mcfcfanchants-2fece",
  storageBucket: "mcfcfanchants-2fece.appspot.com",
  messagingSenderId: "1043257526255",
  appId: "1:1043257526255:web:a3277c769c7165298c981a",
  measurementId: "G-7EKHDTGQYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);