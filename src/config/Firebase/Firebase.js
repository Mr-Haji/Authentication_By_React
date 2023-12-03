
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyDH6HyubnIFgbksS2IBeWSUW4paeBT9en4",
    authDomain: "authenticationbyreact.firebaseapp.com",
    projectId: "authenticationbyreact",
    storageBucket: "authenticationbyreact.appspot.com",
    messagingSenderId: "825124657667",
    appId: "1:825124657667:web:bd2009398e00b83ec30c36",
    measurementId: "G-95XK7JMJ08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const AUTH = getAuth(app);

export {AUTH};