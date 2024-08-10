import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXmceJXgklc2t9lrsvPGzGGHotzFrMvQI",
    authDomain: "vintageclothing-coderhouse.firebaseapp.com",
    projectId: "vintageclothing-coderhouse",
    storageBucket: "vintageclothing-coderhouse.appspot.com",
    messagingSenderId: "780051672891",
    appId: "1:780051672891:web:c96b142c431c56f361111e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
