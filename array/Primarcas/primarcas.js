/*
-1- Añadir elemento al final y al principio.
-2- Añadir entre elementos de array "New Orleans Pelicans" y"New York Knicks", 
-3- Extraer el primero y el ultimo elemento y mostrar los por la consola.
-4- Cambiar el valor:"Cleveland Cavaliers" y "Portland Trail Blazers"  .
-5- Mostrar cantidad de elementos.
-6- Mostrara por la consola equipos: Chicago Bulls , Los Angeles Lakers, Miami Heat
********************/
"use strict"
const primarcas40K = [
    "LEGION I- Angeles oscuros - Lion El'Jonson", "LEGION III - Hijos del Emperador - Fulgrim ", "LEGION IV - Guerreros de Hierro - Perturabo", "LEGION V - Cicatrices Blancas- Jaghatai Khan ", "LEGION VI - Lobos Espaciales - Leman Russ.", "LEGION VII - Puños Imperiales - Rogal Dorn.", "LEGION VIII - Amos de la Noche - Konrad Curze (o Acechante Nocturno)", "LEGION IX - Angeles Sangrientos - Sanguinius", "LEGION X - Manos de Hierro -Manus Ferrus", "LEGION XII- Devoradores de Mundos - Angron", "LEGION XIII - Ultramarines - Roboute Guilliman", "LEGION XIV - Guardia de la Muerte - Mortarion", "LEGION XV - Mil Hijos -Magnus el Rojo", "LEGION XVI - Lobos Lunares/Hijos de Horus/Legion Negra - Horus", "LEGION XVII - Portadores de la Palabra - Lorgar.", "LEGION XVIII- Salamandras - Vulkan", "LEGION XIX - Guarida Cuervo - Corax", "LEGION XX -Legion Alfa - Alfarius"
]
console.log(primarcas40K);
let vacio =[];

//primarcas40K.forEach((i, index,) => document.write("<h2> " + i +   " </h2>"));
primarcas40K.forEach(dividir);
function dividir(i,index){  
   let modificado = i.split("-");
   //console.log(modificado);
   vacio.push(modificado);

};
//console.log(vacio);
console.log("vacio  :" + JSON.stringify(vacio, null, '\t'));


/*
console.log(primarcas40K.length);+


let elemento_0 = primarcas40K[0].split("-");
console.log(elemento_0);
for (let porPartes of elemento_0) {
    console.log(porPartes);
}

let elemento_1 = primarcas40K[1].split("-");
console.log(elemento_1);
for (let porPartes of elemento_1) {
    console.log(porPartes);
}
let elemento_2 = primarcas40K[2].split("-");
console.log(elemento_2);
for (let porPartes of elemento_2) {
    console.log(porPartes);
}
let elemento_3 = primarcas40K[3].split("-");
console.log(elemento_3);
for (let porPartes of elemento_3) {
    console.log(porPartes);
}
let elemento_4 = primarcas40K[4].split("-");
console.log(elemento_4);
for (let porPartes of elemento_4) {
    console.log(porPartes)
}
let elemento_5 = primarcas40K[5].split("-");
console.log(elemento_5);
for (let porPartes of elemento_5) {
    console.log(porPartes);
}
let elemento_6 = primarcas40K[6].split("-");
console.log(elemento_6);
for (let porPartes of elemento_6) {
    console.log(porPartes);
}
let elemento_7 = primarcas40K[7].split("-");
console.log(elemento_7);
for (let porPartes of elemento_7) {
    console.log(porPartes);
}

let elemento_8 = primarcas40K[8].split("-");
console.log(elemento_8);
for (let porPartes of elemento_8) {
    console.log(porPartes);
}
let elemento_9 = primarcas40K[9].split("-");
console.log(elemento_9);
for (let porPartes of elemento_9) {
    console.log(porPartes);
}
let elemento_10 = primarcas40K[10].split("-");
console.log(elemento_10);
for (let porPartes of elemento_10) {
    console.log(porPartes);
}
let elemento_11 = primarcas40K[11].split("-");
console.log(elemento_11);
for (let porPartes of elemento_11) {
    console.log(porPartes);
}
let elemento_12 = primarcas40K[12].split("-");
console.log(elemento_12);
for (let porPartes of elemento_12) {
    console.log(porPartes);
}
let elemento_13 = primarcas40K[13].split("-");
console.log(elemento_13);
for (let porPartes of elemento_13) {
    console.log(porPartes);
}
let elemento_14 = primarcas40K[14].split("-");
console.log(elemento_14);
for (let porPartes of elemento_14) {
    console.log(porPartes);
}
let elemento_15 = primarcas40K[15].split("-");
console.log(elemento_15);
for (let porPartes of elemento_15) {
    console.log(porPartes);
}
let elemento_16 = primarcas40K[16].split("-");
console.log(elemento_16);
for (let porPartes of elemento_16) {
    console.log(porPartes);
}
let elemento_17 = primarcas40K[17].split("-");
console.log(elemento_17);
for (let porPartes of elemento_17) {
    console.log(porPartes);
}

const primarcas40KJson = [
    {
        Legion: elemento_0[0],
        Nombre: elemento_0[1],
        Primarca: elemento_0[2]
    },
    {
        Legion: elemento_1[0],
        Nombre: elemento_1[1],
        Primarca: elemento_1[2]
    },
    {
        Legion: elemento_2[0],
        Nombre: elemento_2[1],
        Primarca: elemento_2[2]
    }, 
    {
        Legion: elemento_3[0],
        Nombre: elemento_3[1],
        Primarca: elemento_3[2]
    }, 
    {
        Legion: elemento_4[0],
        Nombre: elemento_4[1],
        Primarca: elemento_4[2]
    }, 
    {
        Legion: elemento_5[0],
        Nombre: elemento_5[1],
        Primarca: elemento_5[2]
    },
     {
        Legion: elemento_6[0],
        Nombre: elemento_6[1],
        Primarca: elemento_6[2]
    }, 
    {
        Legion: elemento_7[0],
        Nombre: elemento_7[1],
        Primarca: elemento_7[2]
    }, 
    {
        Legion: elemento_8[0],
        Nombre: elemento_8[1],
        Primarca: elemento_8[2]
    }, {
        Legion: elemento_9[0],
        Nombre: elemento_9[1],
        Primarca: elemento_9[2]
    }, {
        Legion: elemento_10[0],
        Nombre: elemento_10[1],
        Primarca: elemento_10[2]
    }, {
        Legion: elemento_11[0],
        Nombre: elemento_11[1],
        Primarca: elemento_11[2]
    }, {
        Legion: elemento_12[0],
        Nombre: elemento_12[1],
        Primarca: elemento_12[2]
    },
    {
        Legion: elemento_13[0],
        Nombre: elemento_13[1],
        Primarca: elemento_13[2]
    },
    {
        Legion: elemento_14[0],
        Nombre: elemento_14[1],
        Primarca: elemento_14[2]
    },
    {
        Legion: elemento_15[0],
        Nombre: elemento_15[1],
        Primarca: elemento_15[2]
    },
    {
        Legion: elemento_16[0],
        Nombre: elemento_16[1],
        Primarca: elemento_16[2]
    },
    {
        Legion: elemento_17[0],
        Nombre: elemento_17[1],
        Primarca: elemento_17[2]
    }

]
console.log(primarcas40KJson);

//const nombrePrimarca_0 = elemento_0.pop();
//console.log(nombrePrimarca_0);


*/


/*
arr.forEach((i,index)=> console.log("elemento",index,i));
console.log(primarcas40K);
primarcas40K.forEach((i,index)=>console.log("elemento", index, i));
************************/