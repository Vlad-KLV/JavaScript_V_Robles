"use strict"

let numero = parseInt(prompt("Introduce un numero",0)) ;

document.write("Los números divisores de" + numero + "son:" );


for(let i = 1 ; i <= numero ; i++){
    if(numero%i == 0){
        document.write( i+ "/");

        

    }
   
}