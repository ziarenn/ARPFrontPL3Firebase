import firebase from "../firebaseConfig.js";
import {
  uploadBytes,
  ref,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default function () {
  const contentContainer = document.querySelector(".content");
  contentContainer.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = "Store your files via our app!";
  contentContainer.appendChild(h2);

  // file upload

  // creating the wrapper form and setting attributes
  const fileForm = document.createElement("form");
  fileForm.setAttribute("id", "file-form");

  // creating the file input and setting attributes
  const fileInput = document.createElement("input");
  fileInput.setAttribute("id", "file-input");

  // !!!
  fileInput.setAttribute("type", "file");
  // !!!

  // creating the submit button and setting attributes
  const submitButton = document.createElement("button");
  submitButton.setAttribute("id", "file-form-submit-button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Upload your file";

  // appending elements
  fileForm.appendChild(fileInput);
  fileForm.appendChild(submitButton);
  contentContainer.appendChild(fileForm);

  // selecting the form
  const fileFormInDOM = document.getElementById("file-form");
  fileFormInDOM.addEventListener("submit", function (e) {
    e.preventDefault();

    // getting the file out of the input data
    const file = document.getElementById("file-input").files[0];

    // storage refs
    const storage = firebase.storage;
    const auth = firebase.auth;
    const storageRef = ref(
      storage,
      `/users/${auth.currentUser.uid}/${file.name}`
    );

    // uploading the file via firebase storage
    uploadBytes(storageRef, file).then(() => {
      console.log("file uploaded");
    });
  });
}
