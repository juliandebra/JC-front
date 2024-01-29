import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_APIKEY}`,
    authDomain: process.env.REACT_APP_PROJECT_ID + ".firebaseapp.com",
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROJECT_ID + ".appspot.com",
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
    measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)

export default db;