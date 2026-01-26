
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const nameInputElem = document.getElementById('name').value;
    const emailInputEle = document.getElementById('email').value;
    const passwordInputEle = document.getElementById('password').value;
    const confirmPasswordInputEle = document.getElementById('confirm-password').value;

    console.log(nameInputElem.length > 5) ;
    console.log(nameInputElem === "") ;
    if(nameInputElem === ""){
        enableError('name', "Name cannot be empty"); 
    }else if(nameInputElem.length < 5){
        enableError('name', "Name must be at least 5 characters long"); 
    }
    else{
        disableError('name');
    }
    if(emailInputEle === ""){
        enableError('email', "Email cannot be empty"); 
    }
    if(passwordInputEle === ""){
        enableError('password', "Password cannot be empty"); 
    }
    if(confirmPasswordInputEle === ""){
        enableError('confirm-password', "Confirm Password cannot be empty"); 
    }
    

});

function enableError(inputElem, message){
    const nameField = document.getElementById(inputElem).parentElement;
    nameField.querySelector('input').classList.add('input-error');
    errorElem = nameField.querySelector('.error-message');
    errorElem.textContent = message;
    errorElem.classList.add('error-text');
}

function disableError(inputElem){
    const nameField = document.getElementById(inputElem).parentElement;
    nameField.querySelector('input').classList.remove('input-error');
    nameField.querySelector('input').classList.add('input-success');
    errorElem = nameField.querySelector('.error-message');
    errorElem.textContent = "";
    errorElem.classList.remove('error-text');
}