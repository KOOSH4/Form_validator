//querySelectors
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const form = document.querySelector("#form");
//eventListener
form.addEventListener("submit", function submit(event) {
    event.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLenght(username, 5, 20);
    isValidEmail(email);
    isValidPassword(password);
  });



//functions
// Password Validator

function isValidPassword(input){
    var regularExpression  = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,35}$/;
    if(!input.value.match(regularExpression)){
        showError(input, `Password must include a-Z,0-9 and Speciels`);

    }
    else{
        showSuccess(input);
    }
}
// Email validator
function isValidEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.trim().match(validRegex)) {
      showSuccess(input)
    } else {
        showError(input, `${getFieldName(input)} is unvalid`);
    }
}
// Check Requierd
function checkRequired(inputArr){
    inputArr.forEach((input)=>{
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`);
        }
        else{
            showSuccess(input);
        }
    });
    
}
// Check Length

function checkLenght(input, min, max){
    if(input.value.length < min){
        showError(input ,`${getFieldName(input)} must be at least ${min} Charachters!`);
    }
    else if(input.value.length > max){
        showError(input ,`${getFieldName(input)} must be less than ${max} Charachters!`);
    }
    else{
        showSuccess(input);
    }
}
// Check Password Match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2 ,`Passwords do not match!`);
    } 
}
// Get Field Name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
// Show Error
function showError(input , message){
    const formControl = input.parentElement;
    formControl.className = 'form-control unvalid'
    small = formControl.querySelector('small');
    small.innerHTML = message;
}
// Show Success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control valid'
}

