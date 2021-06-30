document.querySelector(".btn_iniciar").addEventListener("click", iniciarSesion);

function iniciarSesion(e) {
    e.preventDefault();  

    const email = document.querySelector("#email").value;
    const contraseña = document.querySelector("#contraseña").value;
    const error = document.querySelector(".error_modal");

    let timer_modal = setTimeout(() => {
        document.querySelector(".error_modal").style.display = "none";
    }, 3000);

    if (email === "usuario@gmail.com" && contraseña === "123") {
        document.querySelector(".login__form").style.display = ("none");
        document.querySelector(".loader").style.display = ("inline-block");
        
        setTimeout(() => {
            window.location.href = './index.html';
        }, 2000);
    } else if (email === "" || contraseña === ""){
        error.style.display = "inline-block";
        error.innerHTML = "Ingrese sus datos...";

        clearTimeout(timer);
        timer_modal();
    } else {
        error.style.display = "inline-block";
        error.innerHTML = "Datos incorrectos...";
        clearTimeout(timer);
        timer_modal();
    } 

    
}