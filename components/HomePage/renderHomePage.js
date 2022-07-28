const clearContentContainer = (contentContainer) => {
  contentContainer.innerHTML = "";
};

const createH2 = () => {
  const h2 = document.createElement("h2");
  h2.textContent = "Welcome!";
  return h2;
};

const createParagraph = () => {
  const p = document.createElement("p");
  p.textContent =
    "This is a simple web page written in vanilla JavaScript, used as a practice project in frontend courses at Software Development Academy. Block subject: Firebase.";
  return p;
};

export default function () {
  const contentContainer = document.querySelector(".content");
  clearContentContainer(contentContainer);
  const h2 = createH2();
  const p = createParagraph();
  contentContainer.appendChild(h2);
  contentContainer.appendChild(p);
}
