// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKglXYkmc4NSvT8Dw8NACbLNAceAxHg0",
  authDomain: "meets-x-th.firebaseapp.com",
  projectId: "meets-x-th",
  storageBucket: "meets-x-th.firebasestorage.app",
  messagingSenderId: "503147045575",
  appId: "1:503147045575:web:38aeb744012996c42a54e2",
  measurementId: "G-Y6T39LV6JQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
