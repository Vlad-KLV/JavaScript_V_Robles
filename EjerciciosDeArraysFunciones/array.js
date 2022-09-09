"use strict"
var numeros = new Array(6);

/*
 for(var i=0;i<=5; i++){
    numeros[i]=parseInt(prompt("Introduce un numero",0));
 }
 console.log(numeros)
 */

//lo mismo sale con un push
//PEDIRLO EN 6 NUMEROS.


/*Para meterlo de nuevo por pantalla ordenado,lo mas recomendable es hacer una funcion. Esta funcion va recibir un parametro (elementos)y un (textoCustom ="") para pasarle un dato sin interes. (elementos) seria el array y va sustituit  numero*/ 
function mostrarArray(elementos,textoCustom = ""){
    document.write("<h2>Contenido del Array" + textoCustom + " : </h2>");
    elementos.forEach((elemento, index) => {
        document.write("<h3><strong>" + elemento + "</strong></br></h3>");
    });
}



var numeros = [];

for (var i = 0; i <= 5; i++) {
    numeros.push(parseInt(prompt("Introduce un numero", 0)));
}
//MOSTRAR EN EL CUERPO DE LA PAGINA
mostrarArray(numeros);
/* esta parte la llevo para la function mostrarArray.
document.write("<h2>Contenido del Array:</h2>");
numeros.forEach((numero, index) => {
    document.write("<h3><strong>" + numero + "</strong></br></h3>");
});
********/


//MOSTRAR EL ARRAY EN LA CONSOLA.
console.log(numeros);


//ORDENAR Y MOSTRAR:es un orden alfavetico.
numeros.sort();
//console.log(numeros);
//cuando yo quiero volver a mostrar ordenado la llamo popr aki:
mostrarArray(numeros, "ordenado")