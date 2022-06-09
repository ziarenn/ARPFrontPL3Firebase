import renderTodoForm from "./renderTodoForm.js";

export default function () {
  const dummyTodos = ["Wyrzuć śmieci", "Wyjdź na spacer z psem"];
  const contentContainer = document.querySelector(".content");
  const h2 = document.createElement("h2");
  const listItems = dummyTodos.map((el) => {
    const li = document.createElement("li");
    li.textContent = el;
    return li;
  });

  h2.textContent = listItems ? "Your todos:" : "Add your todos:";
  const list = document.createElement("ul");
  listItems.forEach((el) => list.appendChild(el));

  contentContainer.innerHTML = "";
  contentContainer.appendChild(h2);
  renderTodoForm();
  contentContainer.appendChild(list);
}
