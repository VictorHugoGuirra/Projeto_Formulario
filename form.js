const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
});

username.addEventListener("blur", () => {
    checkInputUsername();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Preencha um username!")
    } else{
        const formItem = username.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatorio!!")
    } else{
        const formItem = email.parentElement;
        formItem.className = "form-content";
    }
}

function checkPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "A senha é obrigatorio!!")
    } else if(passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.")
    } else{
        const formItem = password.parentElement;
        formItem.className = "form-content";
    }
}

function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

    if(confirmationPasswordValue === ""){
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.")
    } else if(confirmationPasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não conferem")
    } else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkPassword();
    checkInputPasswordConfirmation();

    const formItem = form.querySelectorAll(".form-content");
    const isValue = [...formItem].every( (item) => {

        return item.className === "form-content"
    });

    if(isValue){
        alert("Usuario cadastrado com susseso!!")
     } 
    // else{
    //     alert("Preencha todos os campos corretamentes.")
    // }

}

function errorInput(input, message){
    const formItem = input.parentElement;//acesa o elemento pai do elemento
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}
