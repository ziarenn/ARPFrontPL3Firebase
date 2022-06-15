import renderTodoForm from "./renderTodoForm.js";
import {
  ref,
  onValue,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import firebase from "../firebaseConfig.js";
const auth = firebase.auth;
const database = firebase.database;

export default function () {
  const contentContainer = document.querySelector(".content");

  // stworz naglowek strony (h2) i ustaw textcontent na 'Add, remove and edit your todos

  // creating the reference to db
  const todoRef = ref(database, "todos/" + auth.currentUser.uid);

  // adding a change listener to our db reference
  onValue(todoRef, (snapshot) => {
    // collecting data from last db update
    const data = snapshot.val();

    // refactoring data
    const todos = Object.entries(data).map((el) => el[1]);

    // creating the header
    const h2 = document.createElement("h2");
    h2.textContent = "Add, remove and edit your todos";

    const listItems = todos.map((el, i) => {
      // creating the main li element
      const li = document.createElement("li");
      li.setAttribute("id", `li-${i}`);

      // creating the wrapper div
      const div = document.createElement("div");
      div.setAttribute("id", `div-${i}`);

      // creating div's child elements

      // creating the span
      const span = document.createElement("span");
      span.textContent = `${el.todoText} (${el.category})`;

      // creating the edit button
      const editButton = document.createElement("button");
      editButton.setAttribute("id", `edit-button-${i}`);
      editButton.classList.add("edit-button");
      editButton.textContent = "Edit";

      // creating the remove button
      const removeButton = document.createElement("button");
      removeButton.setAttribute("id", `remove-button-${i}`);
      removeButton.classList.add("remove-button");
      removeButton.textContent = "Remove";

      // appending children to the wrapper div
      div.appendChild(span);
      div.appendChild(editButton);
      div.appendChild(removeButton);

      // appending the wrapper div to main li
      li.appendChild(div);

      // returning the li
      return li;
    });
  });
}

// const dummyTodos = ["Wyrzuć śmieci", "Wyjdź na spacer z psem"];
// const contentContainer = document.querySelector(".content");
// const h2 = document.createElement("h2");
// const listItems = dummyTodos.map((el) => {
//   const li = document.createElement("li");
//   li.textContent = el;
//   return li;
// });
// h2.textContent = listItems ? "Your todos:" : "Add your todos:";
// const list = document.createElement("ul");
// listItems.forEach((el) => list.appendChild(el));
// contentContainer.innerHTML = "";
// contentContainer.appendChild(h2);
// renderTodoForm();
// contentContainer.appendChild(list);
