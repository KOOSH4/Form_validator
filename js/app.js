//querySelectors
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const form = document.querySelector('#form');
const userMessage = document.querySelector('#username-message');
const emailMessage = document.querySelector('#email-message');
const passwordMessage = document.querySelector('#password-message');
const password2Message = document.querySelector('#password2-message');

//eventListener
form.addEventListener('submit', submit);
// class
class User{
    constructor(userName, Email, Password){
        this.userName = userName;
        this.Email = Email;
        this.Password = Password;
    }
}
//function
function submit(event){
    event.preventDefault();
    const userNameInput = username.value;
    const userCheck = usernameValidator(userNameInput);
    const emailInput = email.value;
    //emailValidator(emailInput);
    const passwordInput = password.value;
    const passCheck = passwordValidator(passwordInput); 
    const password2Input = password2.value;
    const pass2Check = password2Validator(passwordInput, password2Input); 
    if(userCheck && passCheck && pass2Check){
        const user1 = new User(userNameInput,emailInput,passwordInput);
        console.log("object created");
    }
    username.value = "";
    email.value = "";
    password.value = "";
    password2.value = "";

}
function usernameValidator(event){
    if(event.length < 4){
        userMessage.innerHTML = "at least 4 Character!";
        username.classList.remove('valid');
        username.classList.toggle('unvalid');
        return 0;
    }
    else{
        userMessage.innerHTML = "";
        username.classList.remove('unvalid');
        username.classList.toggle('valid');
        return 1;
    }
}
function passwordValidator(event){
    if(event.length < 6){
        passwordMessage.innerHTML = "Password length must be at least 6 digit!";
        username.classList.toggle('valid');
        username.classList.toggle('unvalid');
        return 0;
    }
    else{
        passwordMessage.innerHTML = "";
        return 1;
    }
}
function password2Validator(event1, event2){
    if(event1 != event2){
        password2Message.innerHTML = "Passwords are not match!";
        username.classList.toggle('valid');
        username.classList.toggle('unvalid');
        return 0;
    }
    else{
        password2Message.innerHTML = "";
        return 1;
    }
}