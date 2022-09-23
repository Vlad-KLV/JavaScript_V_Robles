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
let arr = primarcas40K[0].split("-");
console.log(arr);
arr.forEach((i,index)=> console.log("elemento",index,i));
console.log(primarcas40K);
primarcas40K.forEach((i,index)=>console.log("elemento", index, i));