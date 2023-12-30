import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "@/config/firebase";

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)