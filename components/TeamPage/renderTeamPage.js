import renderTodoForm from "../TodoForm/renderTodoForm.js";

import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

import firebase from "../../firebaseConfig.js";

export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = "Your team's todos.";
  contentContainer.appendChild(h2);

  const todoForm = renderTodoForm();
  todoForm.setAttribute("id", "teams-todo-form");
  contentContainer.appendChild(todoForm);

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
