"use strict"

let numero1 = parseInt(prompt("Introduce un numero", 0));
let numero2 = parseInt(prompt("Introduce un numero", 0));

let resultado = "La suma es" + (numero1 + numero2) + "</br>" + "La resta es" + (numero1 - numero2) + "</br>" + "La divicion es" + (numero1 / numero2) + "</br>"+ "La multiplicacion es" + (numero1 * numero2);



let resultadoAlt = "La suma es" + (numero1 + numero2) +"\n "+
 "La resta es" + (numero1 - numero2) +"\n" +
  "La divicion es" + (numero1 / numero2) +"\n"+ 
  "La multiplicacion es" + (numero1 * numero2);


document.write(resultado);
console.log(resultadoAlt);
alert(resultadoAlt);






