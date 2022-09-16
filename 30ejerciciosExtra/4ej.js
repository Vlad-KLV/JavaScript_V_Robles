"use strict"

let a = parseInt(prompt("introsuce un numero", 0));
let b = parseInt(prompt("introsuce un numero", 0));



for (let i = a + 1; i < b; i++) {
    

    if (i === a + 1 || i==a+4) {
        document.write("<h2>Entere los numeros intoducidos estan estos numeros:" + "<br></h2>");
    }

  


    if (i < b - 1) {
        document.write(i + ", ");
    } else {
        document.write(i+ ".");
    }
}
/*
 for (let i = a-20; i<b; i++){
    console.log(i);

 }*/
