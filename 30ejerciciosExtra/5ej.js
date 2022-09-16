"use strict"


let primerNumero = parseInt(prompt("Introduce un numero",0));
let segundoNumero = parseInt(prompt("Introduce un numero",0));


document.write("<h2>Los numeros impares entre " + primerNumero + " y " + segundoNumero+ " son:</h2>")

for(let i = primerNumero; i<segundoNumero; i++){
    document.write("/"+i);

    if (i % 2 != 0) {

        i++;
   }º   

}



