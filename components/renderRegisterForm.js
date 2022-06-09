export default function () {
  const contentContainer = document.querySelector(".content");

  // creating the form
  const formRegister = document.createElement("form");
  formRegister.setAttribute("id", "form-register");
  // creating email input and setting attributes
  const inputEmailRegister = document.createElement("input");
  inputEmailRegister.setAttribute("type", "email");
  inputEmailRegister.setAttribute("placeholder", "email");
  inputEmailRegister.setAttribute("id", "input-email-register");

  // creating first password input and setting attributes
  const firstInputPasswordRegister = document.createElement("input");
  firstInputPasswordRegister.setAttribute("type", "password");
  firstInputPasswordRegister.setAttribute("placeholder", "password");
  firstInputPasswordRegister.setAttribute(
    "id",
    "first-input-password-register"
  );

  // creating second password input and setting attributes
  const secondInputPasswordRegister = document.createElement("input");
  secondInputPasswordRegister.setAttribute("type", "password");
  secondInputPasswordRegister.setAttribute("placeholder", "password");
  secondInputPasswordRegister.setAttribute(
    "id",
    "second-input-password-register"
  );

  // creating the submit button
  const submitButtonRegister = document.createElement("button");
  submitButtonRegister.setAttribute("type", "submit");
  submitButtonRegister.textContent = "Register";

  // appending children to register form
  formRegister.appendChild(inputEmailRegister);
  formRegister.appendChild(firstInputPasswordRegister);
  formRegister.appendChild(secondInputPasswordRegister);
  formRegister.appendChild(submitButtonRegister);

  // appending the form to content container
  contentContainer.appendChild(formRegister);

  // sciagniecie danych z formularza // nadanie event listenera
  // napisz kod ktory sprawdza czy pierwsze i drugie haslo to to samo, czy email istnieje i czy zawiera @
  // console.log(123)

  const formRegisterInDOM = document.getElementById("form-register");
  formRegisterInDOM.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("input-email-register").value;
    const password1 = document.getElementById(
      "first-input-password-register"
    ).value;
    const password2 = document.getElementById(
      "second-input-password-register"
    ).value;
    if (password1 === password2 && email.includes("@")) {
      console.log(email, password1, password2);

      //firebase auth
    }
  });
}
