import renderTodoForm from "./renderTodoForm.js";

import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

import firebase from "../firebaseConfig.js";

export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";
  // stworz i wyswietl (podpiecie do contentContainera) h2 z textem 'Your team's todos
  const h2 = document.createElement("h2");
  h2.textContent = "Your team's todos.";
  contentContainer.appendChild(h2);

  // stworz i wyswietl formularz przy pomocy renderTodoForm, nadajecie mu id na teams-todo-form
  const todoForm = renderTodoForm();
  todoForm.setAttribute("id", "teams-todo-form");
  contentContainer.appendChild(todoForm);

  // wybieracie formularz i nadajecie event listener na submit
  // sciagacie value z todo inputa
  // sciagacie value z radio inputów
  // tworzycie obiekt todoData i wrzucacie tam te dane
  // const todoData = {
  //     todoText: todo,
  //     category: selectedCategory
  // }
  const teamsTodoFormInDOM = document.getElementById("teams-todo-form");
  teamsTodoFormInDOM.addEventListener("submit", function (e) {
    e.preventDefault();
    const todo = document.getElementById("todo-input").value;
    const radioInputs = document.getElementsByName("category");
    const selectedCategory = Array.from(radioInputs).find(
      (el) => el.checked
    ).value;

    const todoData = {
      todoText: todo,
      category: selectedCategory,
    };
    console.log(todoData);

    const addDocData = async function (todoData) {
      try {
        const docRef = await addDoc(
          collection(firebase.firestore, "teams"),
          todoData
        );
        console.log("Document id: ", docRef.id);
      } catch (e) {
        console.error(e.message);
      }
    };
    addDocData(todoData);
  });

  // creating the main todo list element
  const ul = document.createElement("ul");
  ul.setAttribute("id", "temas-todo-list");

  const readDocData = async function () {
    const querySnapshot = await getDocs(
      collection(firebase.firestore, "teams")
    );
    querySnapshot.forEach((doc) => {
      const docs = doc.data();

      // creating the li element
      const li = document.createElement("li");
      li.textContent = `${docs.todoText} (${docs.category})`;
      ul.appendChild(li);
    });
  };
  readDocData();
  contentContainer.appendChild(ul);
}
