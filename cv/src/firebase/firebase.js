import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEKzi0TihXdG91Q6RNQIqywfyxIWbnaSU",
    authDomain: "veheraandriiresume.firebaseapp.com",
    projectId: "veheraandriiresume",
    storageBucket: "veheraandriiresume.appspot.com",
    messagingSenderId: "705888548768",
    appId: "1:705888548768:web:c0a54d6b1937e3ae8d56c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);