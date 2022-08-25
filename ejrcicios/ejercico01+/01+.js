"use strict"
let numero1 = parseInt(prompt("Introduce el primer numero", 0));
let numero2 = parseInt(prompt("Introduce el segundo numero", 0));

numero1 = parseInt(prompt("Introduce el primer numero", 0));
numero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primer numero", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero",0));

}




if (numero1 == numero2) {
    alert("Los numeros son iguales");

} else if (numero1 > numero2) {
    alert("el numero mayor es" + numero1);
    alert("el numero menor es" + numero2);
}
if (numero1 == numero2) {
    alert("Los numeros son iguales");

} else if (numero1 < numero2) {
    alert("el numero mayor es" + numero1);
    alert("el numero menor es" + numero2);
} else {
    alert("Introducenumeros correctos");
}



