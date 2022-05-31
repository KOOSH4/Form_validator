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

    if(username.value.length == 0){
        const userCheck = errorMessage(username, userMessage, 'Usename required!');
    }else if(username.value.length < 4){
        const userCheck = errorMessage(username, userMessage, 'Username must have at least 4 Characters!');
    }  
     else{
        const userCheck = successMessage(username, userMessage,'');
    }

    if(email.value.length === 0){
        const emailCheck = errorMessage(email, emailMessage, 'Email required!');
    }else if(email.value.length < 4){
        const emailCheck = errorMessage(email, emailMessage, 'Email must have at least 4 Characters!');
    }  
     else{
        const emailCheck = successMessage(email, emailMessage, '');
    }
    if(password.value.length == 0){
        const passwordCheck = errorMessage(password, passwordMessage, 'password required!');
    }else if(password.value.length < 4){
        const passwordCheck = errorMessage(password, passwordMessage, 'password must have at least 4 Characters!');
    }  
     else{
        const passwordCheck = successMessage(password, passwordMessage, '');
    }
    if(password2.value.length == 0){
        const password2Check = errorMessage(password2, password2Message, 'password required!');
    }else if(password2.value !== password.value){
        const password2Check = errorMessage(password2, password2Message, 'Passwords are not the same!');
    }  
     else{
        const password2Check = successMessage(password2, password2Message, '');
    }
    if(userCheck && emailCheck && passwordCheck){
        console.log("hooora");
    }
}
function errorMessage(event1,event2,message){
    event2.innerHTML = message;
    event1.classList.remove('valid');
    event1.classList.add('unvalid');
    return 0;
}
function successMessage(event1,event2,message){
    event2.innerHTML = message;
    event1.classList.remove('unvalid');
    event1.classList.add('valid');
    return 1;
}