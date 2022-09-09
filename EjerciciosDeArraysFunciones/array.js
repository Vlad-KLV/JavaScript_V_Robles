"use strict"
var numeros = new Array(6);

/*
 for(var i=0;i<=5; i++){
    numeros[i]=parseInt(prompt("Introduce un numero",0));
 }
 console.log(numeros)
 */

//lo mismo sale con un push
//PEDIRLO EN 6 NUMEROS.
var numeros = [];

for (var i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}
//MOSTRAR EN EL CUERPO DE LA PAGINA
document.write("<h2>Contenido del Array:</h2>");
numeros.forEach((numero, index) => {
    document.write("<h3><strong>" + numero + "</strong></br></h3>");
});


//MOSTRAR EL ARRAY EN LA CONSOLA.
console.log(numeros);