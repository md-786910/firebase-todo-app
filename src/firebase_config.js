
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBRYfWgC5mePE3iOicsPYmeLKHHnwDlY4M",
    authDomain: "fir-crud-82eeb.firebaseapp.com",
    databaseURL: "https://fir-crud-82eeb-default-rtdb.firebaseio.com",
    projectId: "fir-crud-82eeb",
    storageBucket: "fir-crud-82eeb.appspot.com",
    messagingSenderId: "903749919373",
    appId: "1:903749919373:web:a6902371af21afd5ceb8c4",
    measurementId: "G-2LR7K78C59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }