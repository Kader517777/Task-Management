// environment variable


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAMAmCNNc-eqWXnsJ_7tBAsi251QQKZTL8",
    authDomain: "rajbari-shibir.firebaseapp.com",
    projectId: "rajbari-shibir",
    storageBucket: "rajbari-shibir.appspot.com",
    messagingSenderId: "500101133862",
    appId: "1:500101133862:web:c336ec7a3a56f3219458e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;