//querySelectors
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const form = document.querySelector("#form");
//eventListener
form.addEventListener("submit", submit);
// class
class User {
  constructor(userName, Email, Password) {
    this.userName = userName;
    this.Email = Email;
    this.Password = Password;
  }
}
//functions
function isValidEmail(email) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
function submit(event) {
  event.preventDefault();

  if (username.value.length == 0) {
    errorMessage(username, "Usename is required!");
  } else if (username.value.length < 4) {
    errorMessage(username, "Username must have at least 4 Characters!");
  } else {
    successMessage(username);
  }

  if (email.value.length === 0) {
    errorMessage(email, "Email is required!");
  } else if (!isValidEmail(email)) {
    errorMessage(email, "Unvalid Email Address!");
  } else {
    successMessage(email);
  }
  if (password.value.length == 0) {
    errorMessage(password, "password is required!");
  } else if (password.value.length < 4) {
    errorMessage(password, "password must have at least 4 Characters!");
  } else {
    successMessage(password);
  }
  if (password2.value.length == 0) {
    errorMessage(password2, "password is required!");
  } else if (password2.value !== password.value) {
    errorMessage(password2, "Passwords are not the same!");
  } else {
    successMessage(password2);
  }
}
function errorMessage(event, message) {
  const formControl = event.parentElement;
  const small = formControl.querySelector("small");
  small.innerHTML = message;
  formControl.className = "form-control unvalid";
  return 0;
}
function successMessage(event) {
  const formControl = event.parentElement;
  formControl.className = "form-control valid";
  return 1;
}
