import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD8_d1SQDNa7M77S1JnxrKGooOgxjAQPYc",
    authDomain: "chibuzo-time-tracker-app.firebaseapp.com",
    projectId: "chibuzo-time-tracker-app",
    storageBucket: "chibuzo-time-tracker-app.appspot.com",
    messagingSenderId: "22879915009",
    appId: "1:22879915009:web:fe7b2814420bda18ce8400",
    measurementId: "G-1LXTVKVCEM"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//add firestore
export const db = getFirestore(app);