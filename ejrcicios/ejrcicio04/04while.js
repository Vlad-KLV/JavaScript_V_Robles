"use strict"
var num1 = parseInt(prompt("Introduzca el primer número"));
var num2 = parseInt(prompt("Introduzca el segundo número"));
 
document.write("Los números impares que existen entre " + num1 + " y " + num2 + " son: ");
 
 
while (num1<num2) {
    if (num1 % 2 != 0) {
        document.write( "/" + num1);
    }
    num1++;
}