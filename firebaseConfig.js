// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_rHQ2nla6PtMNLKYrpid_aNwg8RxPSUY",
  authDomain: "arpfrontpl3-firebase.firebaseapp.com",
  projectId: "arpfrontpl3-firebase",
  storageBucket: "arpfrontpl3-firebase.appspot.com",
  messagingSenderId: "1084280855387",
  appId: "1:1084280855387:web:8ee81418a75c69fb2ad87e",
  measurementId: "G-HFEXP7R7XG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(app);
