// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX9meKRaH67YPx2a5nksvFELjR1sdCkRE",
    authDomain: "react-tienda-98df9.firebaseapp.com",
    projectId: "react-tienda-98df9",
    storageBucket: "react-tienda-98df9.appspot.com",
    messagingSenderId: "215963926518",
    appId: "1:215963926518:web:e82902d2e47ae20440d1d7",
    measurementId: "G-KK2PF24MT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);