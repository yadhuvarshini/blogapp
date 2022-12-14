// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth , GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyD8QUTD_fbalBl7heX2E4N13DdgoN20C1w",

  authDomain: "blogapp-2b0a3.firebaseapp.com",

  projectId: "blogapp-2b0a3",

  storageBucket: "blogapp-2b0a3.appspot.com",

  messagingSenderId: "535011332138",

  appId: "1:535011332138:web:7af7066b76ff2dad9b7353"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAevkl9aj8ug67TFDQuCgziDB8iXqyG31g",
//   authDomain: "blogapp-b63bc.firebaseapp.com",
//   projectId: "blogapp-b63bc",
//   storageBucket: "blogapp-b63bc.appspot.com",
//   messagingSenderId: "878647807865",
//   appId: "1:878647807865:web:7399fbda63f97dc9f569a8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);