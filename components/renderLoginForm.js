export default function () {
  const form = document.createElement("form");
  form.setAttribute("id", "login-form");
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("id", "input-email");
  inputEmail.setAttribute("placeholder", "email");
  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "Password");
  inputPassword.setAttribute("id", "input-Password");
  inputPassword.setAttribute("placeholder", "Password");
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Log in";
  form.appendChild(inputEmail);
  form.appendChild(inputPassword);
  form.appendChild(submitButton);
  return form;
}
