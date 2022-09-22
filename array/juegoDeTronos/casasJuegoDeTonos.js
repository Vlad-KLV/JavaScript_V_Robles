/*
-1- Añadir elemento al final y al principio.
-2- Añadir entre elementos de array :"Casa Baratheon." y "Casa Stark."
-3- Extraer el primero y el ultimo elemento y mostrar los por la consola.
-4- Cambiar el valor: ."Casa Targaryen.""******************"
-5- Mostrar cantidad de elementos.
-6- Mostrar por la consola equipos: "Casa Lannister."
********************/
const casasJuegoDeTrono = [
    "Casa Tyrell.", "Casa Lannister.", "Casa Baratheon.", "Casa Stark.", "Casa Targaryen.", "Casa Tully."
]
console.log(casasJuegoDeTrono); 
//1
casasJuegoDeTrono.unshift("casa de JavaScript");
casasJuegoDeTrono.push("casa de JavaScript");
//2
casasJuegoDeTrono.splice(3,0,"******************","!!!!!!!!!!!!!!!!!!!!!!!");
//3
 let primerElemento = casasJuegoDeTrono.shift();
 console.log(primerElemento);
 let ultimoElemento = casasJuegoDeTrono.pop();
 console.log(ultimoElemento);
 //4
 casasJuegoDeTrono[5]= "casa de Dragon"
 casasJuegoDeTrono[2]= "Casa Targaryen."
 //5
 console.log(casasJuegoDeTrono.length);
 //6
 console.log(casasJuegoDeTrono[1]);


