"use strict";

import {
  getAuth,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`User is logged in (${user.email}), onAuthStateChanged`);
  } else {
    console.log(`No user logged in. onAuthStateChanged`);
    renderHomePage();
  }
});

// Importing components
import renderHomePage from "./components/renderHomePage.js";
import renderTodoPage from "./components/renderTodoPage.js";
import renderAboutPage from "./components/renderAboutPage.js";
import renderTeamPage from "./components/renderTeamPage.js";
import renderLoginPage from "./components/renderLoginPage.js";

// Selecting the most important elements of the page

// Selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const aboutButton = document.getElementById("about-anchor");
const publicButton = document.getElementById("public-anchor");
const loginButton = document.getElementById("login-anchor");

// Selecting the content section
const contentSection = document.querySelector(".content");

// Adding event listeners to the navbar buttons

// Rendering the home page
// renderHomePage();

// zaimportuj baze danych z configa, zaimportuj push i ref z firebase-database i wywołaj push na top scopie
// push(ref(database, "todos/" + auth.currentUser.uid), {
//   todoText: 'lalalaa',
//   category: 'work',
// })

// Home button event listener
homeButton.addEventListener("click", function () {
  renderHomePage();
});

// Todos button event listener
todosButton.addEventListener("click", function () {
  const user = auth.currentUser;
  user ? renderTodoPage() : renderLoginPage();
});

// About button event listener
aboutButton.addEventListener("click", function () {
  renderAboutPage();
});

publicButton.addEventListener("click", function () {
  renderTeamPage();
});

// Login button event listener
loginButton.addEventListener("click", function () {
  renderLoginPage();
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
  // sprawdzacie czy uzytkownik istnieje
  //jezeli istnieje:
  // poszukajcie i uzyjcie funkcji signOut po czym wyswietlacie homePage
  // jezeli nie istnieje:
  // render loginPage
});
