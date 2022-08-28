" use strict"

let numero1 = parseInt(prompt("Introduce el preimer numero", 0));
let numero2 = parseInt(prompt("Introduce el segundo numero", 0));

document.write("<h1>De"+numero1+ "a"+ numero2+ "estan estos numeros:</h1>");



for(let i = numero1+1; i < numero2; ++i){
    document.write(i+ "/") 
}
    

