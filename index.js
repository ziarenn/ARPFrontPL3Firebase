// "use strict";

import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`User is logged in (${user.email}), onAuthStateChanged`);
    loginButton.textContent = "Log out";
  } else {
    console.log(`No user logged in. onAuthStateChanged`);
    renderHomePage();
    loginButton.textContent = "Log in";
  }
});

// Importing components
import renderHomePage from "./components/HomePage/renderHomePage.js";
import renderTodoPage from "./components/TodoPage/renderTodoPage.js";
import renderAboutPage from "./components/AboutPage/renderAboutPage.js";
import renderTeamPage from "./components/TeamPage/renderTeamPage.js";
import renderLoginPage from "./components/LoginPage/renderLoginPage.js";

// Selecting the most important elements of the page

// Selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const aboutButton = document.getElementById("about-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

// Selecting the content section
const contentSection = document.querySelector(".content");

// Rendering the home page
renderHomePage();

// Adding event listeners to the navbar buttons

// Home button event listener
homeButton.addEventListener("click", function () {
  renderHomePage();
});

// Todos button event listener
todosButton.addEventListener("click", function () {
  console.log(123);
  const user = auth.currentUser;
  user ? renderTodoPage() : renderLoginPage();
});

// About button event listener
aboutButton.addEventListener("click", function () {
  renderAboutPage();
});

// Team todos button event listener
publicButton.addEventListener("click", function () {
  renderTeamPage();
});

// Login button event listener
loginButton.addEventListener("click", function () {
  const user = auth.currentUser;
  if (user) {
    signOut(auth)
      .then(() => {
        renderHomePage();
        loginButton.textContent = "Log in";
      })
      .catch((error) => {
        console.log(error.message);
      });
  } else {
    contentSection.innerHTML = "";
    renderLoginPage();
  }
});
