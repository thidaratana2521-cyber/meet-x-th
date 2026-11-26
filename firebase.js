import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKglXYkmc4NSvT8Dw8NACbLNAceAxHg0",
  authDomain: "meets-x-th.firebaseapp.com",
  projectId: "meets-x-th",
  storageBucket: "meets-x-th.firebasestorage.app",
  messagingSenderId: "503147045575",
  appId: "1:503147045575:web:38aeb744012996c42a54e2",
  measurementId: "G-Y6T39LV6JQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
