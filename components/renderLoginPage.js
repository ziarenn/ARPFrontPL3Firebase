import renderLoginForm from "./renderLoginForm.js";
import renderRegisterForm from "./renderRegisterForm.js";
import renderHomePage from "./renderHomePage.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
//import auth
import firebase from "../firebaseConfig.js";
const auth = firebase.auth;

export default function () {
  // selecting the necessary
  const contentContainer = document.querySelector(".content");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const label = document.createElement("label");
  const form = renderLoginForm();
  const registerButton = document.createElement("button");
  registerButton.setAttribute("id", "register-button");
  registerButton.textContent = "Register";
  // setting the attributes
  h2.textContent = "Log in or sign up";
  p.textContent =
    "Our authentication mechanism uses Firebase Auth and is 100% secure.";
  label.textContent = "Log in:";

  //cleaning and populating the content container
  contentContainer.innerHTML = "";
  contentContainer.appendChild(h2);
  contentContainer.appendChild(p);
  contentContainer.appendChild(label);
  contentContainer.appendChild(form);
  contentContainer.appendChild(registerButton);
  const registerButtonInDOM = document.getElementById("register-button");
  registerButtonInDOM.addEventListener("click", function (e) {
    contentContainer.innerHTML = "";
    renderRegisterForm();
  });
  const formInDOM = document.getElementById("login-form");
  formInDOM.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("input-email").value;
    const password = document.getElementById("input-Password").value;

    signInWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const user = userCredentials.user;
        console.log(user.uid)
        console.log(user);
        document.getElementById("login-anchor").textContent = "Logout";
        renderHomePage();
      }
    );
  });
  // dodaj event listener na formularz i wykorzystaj narzędzia firebase/auth do zalogowania użytkownika
}
