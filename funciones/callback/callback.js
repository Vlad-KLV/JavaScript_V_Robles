"use strict"
function saludar(nombre) { 
    alert('Hola ' + nombre); 
    } 

    function procesarEntradaUsuario(callback) { 
    var nombre = prompt('como te llamas NneNO.'); 
    callback(nombre); 
    } 

    procesarEntradaUsuario(saludar); 


function mayorDeEdad(edad){
    alert("Hola , usted tiene"  + edad );
}

function procesarEdadUsuario(callback) { 
var edad = parseInt( prompt('cuantos años tienes',0)); 
callback(edad); 
} 

procesarEdadUsuario(mayorDeEdad);

/* no funcciona señor
poniendo saludar y mayorDeEdad  tmb propisyvaet chto popalo.
if(mayorDeEdad>=18){
    //si es mayor de edad
    document.write(nombre+ " tiene"+edad+" años y es mayor de edad");
}else{
    // y si es menor de edad
    document.write( nombre +" tiene"+edad+" años y es menor de edad");
}*/