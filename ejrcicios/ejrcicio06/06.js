"use strict"

let numero = parseInt(prompt("Introcuce el numero",0)) ;

/*
while(isNan(numero)){
     numero = parseInt(prompt("Introcuce el numero", 0)) ;
}*/



document.write(" El numero introducido" + " " + numero + " " )

if(numero % 2 == 0){
    document.write("es par");
}else{
    document.write("es impar");
}

