// Se usa la funcion enviar datos al usar submit en el formulario
let form = document.getElementById("forma");
form.addEventListener("submit", enviarDatos);

// Se usa jquery para asignar la funcion volver al boton
$(".btn-volver").click(volver);


function enviarDatos(e) {
    e.preventDefault();
    
    // Variables para almacenar datos Personales
    let rut = document.getElementById("rut").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let sexo = document.getElementById("sexo").value;
    let fe_nacimiento = document.getElementById("fe-nacimiento").value;
    let cargo = document.getElementById("cargo").value;
    let sueldo = document.getElementById("sueldo-base").value;
    let bono = document.getElementById("bono").value;

    // Presentacion de datos
    document.getElementById("forma").style.display = "none";
    document.getElementById("detalle").style.display = "grid";

    // Datos personales
    document.querySelector(".rut").innerHTML = rut;
    document.querySelector(".nombre").innerHTML = nombre + " " + apellidos;
    document.querySelector(".sexo").innerHTML = sexo.charAt(0).toUpperCase() + sexo.slice(1);;
    document.querySelector(".fechaNacimiento").innerHTML = fe_nacimiento;
    document.querySelector(".detalle__cargo").innerHTML = cargo.charAt(0).toUpperCase() + cargo.slice(1);
    // Sueldo
    document.querySelector(".sueldoBase").innerHTML = "$" + sueldo;
    document.querySelector(".bono").innerHTML = "$" + bono;
    document.querySelector(".impuestos").innerHTML = "$" + calcularDescuentos(sueldo, bono);
    document.querySelector(".sueldoLiquido").innerHTML = "$" + calcularSueldoLiquido(sueldo, bono);
    
}

function calcularSueldoLiquido (sueldoBase, bono){
    // Se devuelve el sueldo liquido
    return parseInt(((parseInt(sueldoBase) + parseInt(bono)) * 0.8));
};

function calcularDescuentos (sueldoBase, bono){
    // Se devuelve el total del descuento
    return parseInt(((parseInt(sueldoBase) + parseInt(bono)) * 0.2));
};

function volver() {
    // Funcion para volver al formulario y resetear los inputs
    let forma = document.getElementById("forma");
    forma.style.display = "grid";
    forma.reset();

    document.getElementById("detalle").style.display = "none";
}