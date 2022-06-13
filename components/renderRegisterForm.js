// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
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
  databaseURL: 'https://arpfrontpl3-firebase-default-rtdb.europe-west1.firebasedatabase.app'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

// initializing authentication service

const auth = getAuth();

export default function () {
  const contentContainer = document.querySelector(".content");

  // creating the form
  const formRegister = document.createElement("form");
  formRegister.setAttribute("id", "form-register");
  // creating email input and setting attributes
  const inputEmailRegister = document.createElement("input");
  inputEmailRegister.setAttribute("type", "email");
  inputEmailRegister.setAttribute("placeholder", "email");
  inputEmailRegister.setAttribute("id", "input-email-register");

  // creating first password input and setting attributes
  const firstInputPasswordRegister = document.createElement("input");
  firstInputPasswordRegister.setAttribute("type", "password");
  firstInputPasswordRegister.setAttribute("placeholder", "password");
  firstInputPasswordRegister.setAttribute(
    "id",
    "first-input-password-register"
  );

  // creating second password input and setting attributes
  const secondInputPasswordRegister = document.createElement("input");
  secondInputPasswordRegister.setAttribute("type", "password");
  secondInputPasswordRegister.setAttribute("placeholder", "password");
  secondInputPasswordRegister.setAttribute(
    "id",
    "second-input-password-register"
  );

  // creating the submit button
  const submitButtonRegister = document.createElement("button");
  submitButtonRegister.setAttribute("type", "submit");
  submitButtonRegister.textContent = "Register";

  // appending children to register form
  formRegister.appendChild(inputEmailRegister);
  formRegister.appendChild(firstInputPasswordRegister);
  formRegister.appendChild(secondInputPasswordRegister);
  formRegister.appendChild(submitButtonRegister);

  // appending the form to content container
  contentContainer.appendChild(formRegister);

  // sciagniecie danych z formularza // nadanie event listenera
  // napisz kod ktory sprawdza czy pierwsze i drugie haslo to to samo, czy email istnieje i czy zawiera @
  // console.log(123)

  const formRegisterInDOM = document.getElementById("form-register");
  formRegisterInDOM.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("input-email-register").value;
    const password1 = document.getElementById(
      "first-input-password-register"
    ).value;
    const password2 = document.getElementById(
      "second-input-password-register"
    ).value;
    const password = password1;
    if (password1 === password2 && email.includes("@")) {
      console.log(email, password1, password2);

      //firebase auth

      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          const user = userCredentials.user;
          console.log(user);
        }
      );
    }
  });
}
