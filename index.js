"use strict";

// Importing components
import renderHomePage from "./components/renderHomePage.js";
import renderTodoPage from "./components/renderTodoPage.js";
import renderAboutPage from "./components/renderAboutPage.js";
import renderLoginPage from "./components/renderLoginPage.js";

// Selecting the most important elements of the page

// Selecting navbar anchors
const homeButton = document.getElementById("home-anchor");
const todosButton = document.getElementById("todos-anchor");
const aboutButton = document.getElementById("about-anchor");
const loginButton = document.getElementById("login-anchor");

// Selecting the content section
const contentSection = document.querySelector(".content");
const string = "123@123.pl";

// Adding event listeners to the navbar buttons

// Rendering the home page
// renderHomePage();

// Home button event listener
homeButton.addEventListener("click", function () {
  renderHomePage();
});

// Todos button event listener
todosButton.addEventListener("click", function () {
  renderTodoPage();
});

// About button event listener
aboutButton.addEventListener("click", function () {
  renderAboutPage();
});

// Login button event listener
loginButton.addEventListener("click", function () {
  renderLoginPage();
});
