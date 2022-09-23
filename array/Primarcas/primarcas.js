/*
-1- Añadir elemento al final y al principio.
-2- Añadir entre elementos de array "New Orleans Pelicans" y"New York Knicks", 
-3- Extraer el primero y el ultimo elemento y mostrar los por la consola.
-4- Cambiar el valor:"Cleveland Cavaliers" y "Portland Trail Blazers"  .
-5- Mostrar cantidad de elementos.
-6- Mostrara por la consola equipos: Chicago Bulls , Los Angeles Lakers, Miami Heat
********************/
"use strict"
const primarcas40K=[
    "LEGION I- Angeles oscuros - Lion El'Jonson","LEGION III - Hijos del Emperador - Fulgrim ","LEGION IV - Guerreros de Hierro - Perturabo","LEGION V - Cicatrices Blancas- Jaghatai Khan ","LEGION VI - Lobos Espaciales - Leman Russ.","LEGION VII - Puños Imperiales - Rogal Dorn.","LEGION VIII - Amos de la Noche - Konrad Curze (o Acechante Nocturno)","LEGION IX - Angeles Sangrientos - Sanguinius","LEGION X - Manos de Hierro -Manus Ferrus","LEGION XII- Devoradores de Mundos - Angron","LEGION XIII - Ultramarines - Roboute Guilliman","LEGION XIV - Guardia de la Muerte - Mortarion","LEGION XV - Mil Hijos -Magnus el Rojo","LEGION XVI - Lobos Lunares/Hijos de Horus/Legion Negra - Horus","LEGION XVII - Portadores de la Palabra - Lorgar.","LEGION XVIII- Salamandras - Vulkan","LEGION XIX - Guarida Cuervo - Corax","LEGION XX -Legion Alfa - Alfarius"
]
console.log(primarcas40K);


primarcas40K.forEach((i,index,)=>console.log(  i ,index));


console.log(primarcas40K.length);


let elemento_0 = primarcas40K[0].split("-");
console.log(elemento_0);
let elemento_1 = primarcas40K[1].split("-");
console.log(elemento_1);
let elemento_2 = primarcas40K[2].split("-");
console.log(elemento_2);
let elemento_3 = primarcas40K[3].split("-");
console.log(elemento_3);
let elemento_4 = primarcas40K[4].split("-");
console.log(elemento_4);
let elemento_5 = primarcas40K[5].split("-");
console.log(elemento_5);
let elemento_6 = primarcas40K[6].split("-");
console.log(elemento_6);
let elemento_8 = primarcas40K[8].split("-");
console.log(elemento_8);
let elemento_9 = primarcas40K[9].split("-");
console.log(elemento_9);
let elemento_10 = primarcas40K[10].split("-");
console.log(elemento_10);
let elemento_11 = primarcas40K[11].split("-");
console.log(elemento_11);
let elemento_12 = primarcas40K[12].split("-");
console.log(elemento_12);
let elemento_13 = primarcas40K[13].split("-");
console.log(elemento_13);
let elemento_14 = primarcas40K[14].split("-");
console.log(elemento_14);
let elemento_15 = primarcas40K[15].split("-");
console.log(elemento_15);
let elemento_16 = primarcas40K[16].split("-");
console.log(elemento_16);
let elemento_17 = primarcas40K[17].split("-");
console.log(elemento_17);


const nombrePrimarca_0 = elemento_0.pop();
console.log(nombrePrimarca_0);





/*
arr.forEach((i,index)=> console.log("elemento",index,i));
console.log(primarcas40K);
primarcas40K.forEach((i,index)=>console.log("elemento", index, i));
************************/