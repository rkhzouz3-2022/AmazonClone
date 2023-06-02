import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqIMKZEwVbkw35AiFKr8XnXQLHNhL5MHM",
    authDomain: "clone-e99f7.firebaseapp.com",
    projectId: "clone-e99f7",
    storageBucket: "clone-e99f7.appspot.com",
    messagingSenderId: "485835086957",
    appId: "1:485835086957:web:6b8837d449a161ff1a7364",
    measurementId: "G-CGWV2SEF3F"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }