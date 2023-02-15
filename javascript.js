let p2 = document.querySelector("#confirm-password");
let createAccount = document.querySelector("button");
createAccount.addEventListener('click', checkPasswordMatch)
p2.addEventListener('focusout', checkPasswordMatch);

function checkPasswordMatch(){
    let p1 = document.querySelector("#password");
    let message = document.querySelector('#password-not-match');
    if (p2.value != p1.value){
        p1.style.borderColor = "red";
        p2.style.borderColor = "red";
        message.style.visibility = "visible";
    } else {
        p1.style.borderColor = "lightgray";
        p2.style.borderColor = "lightgray";
        message.style.visibility = "hidden";
    }
}