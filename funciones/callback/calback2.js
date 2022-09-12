"use strict"


function procesarEntradaUsuario(callback) {
    var nombre = prompt('Como te llamas?');
    callback(nombre);
} 

function saludar(nombre) {
    alert('Hola ' + nombre);
}


function procesarEdadUsuario(callback) {
    var edad = parseInt(prompt('cuantos años tienes', 0));
    callback(edad);
}



function mayorDeEdad(edad) {
    alert("Hola , usted tiene" + edad);
    if (edad >= 18) {
        //la función no recibe el valor de var <nombre> y no es capaz de procesar
        document.write( /*nombre+ */ " tiene" + edad + " años y es mayor de edad");
    } else {
        //la función no recibe el valor de var <nombre> y no es capaz de procesar
        document.write( /*  nombre +*/  " tiene " + edad + " años y es menor de edad");
    }
}
procesarEntradaUsuario(saludar);
procesarEdadUsuario(mayorDeEdad);