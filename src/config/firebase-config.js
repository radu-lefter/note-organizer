import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNTVmwooYTEgMvFny0JhvATv2OmGVaIm4",
    authDomain: "orgeton-fc535.firebaseapp.com",
    projectId: "orgeton-fc535",
    storageBucket: "orgeton-fc535.appspot.com",
    messagingSenderId: "682376022961",
    appId: "1:682376022961:web:bbd2dc2c967724adb24b90",
    measurementId: "G-04B0RKR4SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;