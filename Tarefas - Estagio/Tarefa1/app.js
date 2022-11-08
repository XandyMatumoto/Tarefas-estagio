
const loginBnt = document.querySelector('.botao');
const toggle = document.querySelector("#togglePassword");
const password = document.querySelector("#senha");

loginBnt.addEventListener("click", function(event){
    event.preventDefault()
    const user =document.querySelector('#email').value;
    const pass = document.querySelector('#senha').value;
    if(user === "admin@gmail.com" && pass === "admin") {
        window.location.replace("../tarefa2/CRUD.html");
    }else {
        alert("informacoes invalidas");
    }
})

toggle.addEventListener("click", function(){

    const type =password.getAttribute("type") ==="password"? "text" : "password";
    password.setAttribute("type",type);

})
