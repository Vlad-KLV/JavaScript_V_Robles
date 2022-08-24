/*"use strict"
//es una esructura de  control que se repite varias veces
let numero = 100;
for(var i = 0; i<numero; i++){
    console.log("Vamos por el numero:" +i);
}*/
// de este modo  no llega a 100:i<numero; <= nos permite llegar a 100.
"use strict"
//es una esructura de  control que se repite varias veces
let numero = 100;
for(var i = 0; i<=numero; i++){
    console.log("Vamos por el numero:" +i);
}