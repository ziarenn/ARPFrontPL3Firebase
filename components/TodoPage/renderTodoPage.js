import renderTodoForm from "../TodoForm/renderTodoForm.js";
import {
  ref,
  onValue,
  push,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import firebase from "../../firebaseConfig.js";
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
    if (!data) {
      const h2 = document.createElement("h2");
      h2.textContent = "Add, remove and edit your todos";
      contentContainer.innerHTML = "";
      contentContainer.appendChild(h2);
      const todoFormInDOM = renderTodoForm();
      contentContainer.appendChild(todoFormInDOM);
      todoFormInDOM.addEventListener("submit", function (e) {
        e.preventDefault();
        const radios = document.getElementsByName("category");
        const category = Array.from(radios).find((el) => el.checked).value;
        const inputTodoInDOM = document.getElementById("todo-input");
        const todo = inputTodoInDOM.value;
        console.log(category, todo);
        push(ref(database, "todos/" + auth.currentUser.uid), {
          todo: todo,
          category: category,
        })
          .then(() => {
            console.log("Pushed the data to db");
          })
          .catch((err) => console.log(err.message));
      });
      return;
    }
    console.log(Object.entries(data));
    // refactoring data
    console.log(data);
    console.log(Object.entries(data));
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
      span.textContent = `${el.todo} (${el.category})`;

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

    // creating the todolist
    const list = document.createElement("ul");

    // appending the li's to the list
    listItems.forEach((el) => list.appendChild(el));

    // displaying the elements
    contentContainer.innerHTML = "";
    contentContainer.appendChild(h2);
    contentContainer.appendChild(renderTodoForm());
    contentContainer.appendChild(list);

    // selecting the elements that are already in the DOM

    const todoFormInDOM = document.getElementById("todo-form");
    const inputTodoInDOM = document.getElementById("todo-input");
    todoFormInDOM.addEventListener("submit", function (e) {
      e.preventDefault();
      const radios = document.getElementsByName("category");
      const category = Array.from(radios).find((el) => el.checked).value;
      const todo = inputTodoInDOM.value;
      console.log(category, todo);
      push(ref(database, "todos/" + auth.currentUser.uid), {
        todo: todo,
        category: category,
      })
        .then(() => {
          console.log("Pushed the data to db");
        })
        .catch((err) => console.log(err.message));
    });

    // selecting edit buttons
    const editButtons = Array.from(
      document.getElementsByClassName("edit-button")
    );

    // adding event listeners for each edit button
    editButtons.forEach((el, i) => {
      el.addEventListener("click", function () {
        this.remove();
        const div = document.getElementById(`div-${i}`);
        const form = renderTodoForm();
        form.id = `todo-form-${i}`;
        div.appendChild(form);
        const formInDOM = document.getElementById(`todo-form-${i}`);
        formInDOM.addEventListener("submit", function (e) {
          e.preventDefault();
          const todoText = this.childNodes[0].value;
          console.log(todoText);
          const selectedCategory = Array.from(
            this.getElementsByTagName("input")
          )
            .slice(1, 5)
            .find((el) => el.checked).value;
          console.log(selectedCategory);
          const updates = {};
          updates[
            "todos/" + auth.currentUser.uid + "/" + Object.entries(data)[i][0]
          ] = {
            category: selectedCategory,
            todo: todoText,
          };
          update(ref(database), updates);
        });
      });
    });

    // selecting remove buttons and adding event listeners
    const removeButtons = Array.from(
      document.getElementsByClassName("remove-button")
    );
    removeButtons.forEach((el, i) => {
      el.addEventListener("click", function () {
        this.parentElement.parentElement.remove();
        remove(
          ref(
            database,
            "todos/" + auth.currentUser.uid + "/" + Object.entries(data)[i][0]
          )
        );
      });
    });
  });
}
