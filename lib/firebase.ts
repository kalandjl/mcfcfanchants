import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "@/config/firebase";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

console.log(process.env)
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();


provider.addScope('https://www.googleapis.com/auth/contacts.readonly');