import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAU2SU2c-neOoOw8T-ocqjkSHeVlvor_JI",
    authDomain: "mode-e67bc.firebaseapp.com",
    projectId: "mode-e67bc",
    storageBucket: "mode-e67bc.firebasestorage.app",
    messagingSenderId: "19916654661",
    appId: "1:19916654661:web:be0b2b5091f6d82c353b2c",
    measurementId: "G-0YQQSWZLBC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
