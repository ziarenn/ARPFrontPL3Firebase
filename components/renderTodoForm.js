import {
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import firebase from "../firebaseConfig.js";

const app = firebase.app;
const auth = firebase.auth;
const database = firebase.database;

export default function () {
  const contentContainer = document.querySelector(".content");
  const form = document.createElement("form");
  form.setAttribute("id", "todo-form");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "todo-input");

  const fieldSet = document.createElement("fieldset");
  fieldSet.setAttribute("id", "todo-fieldset");

  const legend = document.createElement("legend");
  legend.textContent = "Select a category";

  // radio work
  const divWork = document.createElement("div");
  divWork.setAttribute("id", "div-work");
  const radioCategoryWork = document.createElement("input");
  radioCategoryWork.setAttribute("type", "radio");
  radioCategoryWork.setAttribute("id", "radio-work");
  radioCategoryWork.setAttribute("name", "category");
  radioCategoryWork.setAttribute("value", "work");
  radioCategoryWork.setAttribute("checked", "true");
  const radioCategoryWorkLabel = document.createElement("label");
  radioCategoryWorkLabel.setAttribute("for", "radio-work");
  radioCategoryWorkLabel.textContent = "Work";
  divWork.appendChild(radioCategoryWork);
  divWork.appendChild(radioCategoryWorkLabel);

  // radio life
  const divLife = document.createElement("div");
  divLife.setAttribute("id", "div-life");
  const radioCategoryLife = document.createElement("input");
  radioCategoryLife.setAttribute("type", "radio");
  radioCategoryLife.setAttribute("id", "radio-life");
  radioCategoryLife.setAttribute("name", "category");
  radioCategoryLife.setAttribute("value", "life");

  const radioCategoryLifeLabel = document.createElement("label");
  radioCategoryLifeLabel.setAttribute("for", "radio-life");
  radioCategoryLifeLabel.textContent = "Life";
  divLife.appendChild(radioCategoryLife);
  divLife.appendChild(radioCategoryLifeLabel);

  // radio sport
  const divSport = document.createElement("div");
  divSport.setAttribute("id", "div-sport");
  const radioCategorySport = document.createElement("input");
  radioCategorySport.setAttribute("type", "radio");
  radioCategorySport.setAttribute("id", "radio-sport");
  radioCategorySport.setAttribute("name", "category");
  radioCategorySport.setAttribute("value", "sport");

  const radioCategorySportLabel = document.createElement("label");
  radioCategorySportLabel.setAttribute("for", "radio-sport");
  radioCategorySportLabel.textContent = "Sport";
  divSport.appendChild(radioCategorySport);
  divSport.appendChild(radioCategorySportLabel);

  // radio education
  const divEducation = document.createElement("div");
  divEducation.setAttribute("id", "div-education");
  const radioCategoryEducation = document.createElement("input");
  radioCategoryEducation.setAttribute("type", "radio");
  radioCategoryEducation.setAttribute("id", "radio-education");
  radioCategoryEducation.setAttribute("name", "category");
  radioCategoryEducation.setAttribute("value", "education");

  const radioCategoryEducationLabel = document.createElement("label");
  radioCategoryEducationLabel.setAttribute("for", "radio-education");
  radioCategoryEducationLabel.textContent = "education";
  divEducation.appendChild(radioCategoryEducation);
  divEducation.appendChild(radioCategoryEducationLabel);

  // creating the submit button
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.classList.add("todo-form-submit-button");
  submitButton.textContent = "Add todo";

  // appending children to fieldset
  fieldSet.appendChild(legend);
  fieldSet.appendChild(divWork);
  fieldSet.appendChild(divLife);
  fieldSet.appendChild(divSport);
  fieldSet.appendChild(divEducation);

  // appending the input to the form
  form.appendChild(input);

  // appending the fieldset to form
  form.appendChild(fieldSet);

  // appending the submit button to form
  form.appendChild(submitButton);

  return todoForm;
  // appending the form to content container
  //contentContainer.appendChild(form);

  // // selecting elements that are already in the DOM
  // const formInDOM = document.getElementById("todo-form");
  // const inputInDOM = document.getElementById("todo-input");

  // const radios = document.getElementsByName("category");

  // // adding the event lister to the form

  // formInDOM.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   const selectedCategory = Array.from(radios).find((el) => el.checked).value;
  //   const todo = inputInDOM.value;
  //   const response = {
  //     todo: todo,
  //     category: selectedCategory,
  //   };
  //   console.log(response);
  //   // wrzuć odpowiednie dane do bazy danych
  //   push(ref(database, "todos/" + auth.currentUser.uid), response).then(() => {
  //     console.log("Operacja push zakończona powodzeniem");
  //   });
  // });
}
