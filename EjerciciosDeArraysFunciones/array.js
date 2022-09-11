"use strict"
/*
var numeros = new Array(6);


 for(var i=0;i<=5; i++){
    numeros[i]=parseInt(prompt("Introduce un numero",0));
 }
 console.log(numeros)
 ************/

//lo mismo sale con un push
//PEDIRLO EN 6 NUMEROS.

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

/*Para meterlo de nuevo por pantalla ordenado,lo mas recomendable es hacer una funcion. Esta funcion va recibir un parametro (elementos)y un (textoCustom ="")-para pasarle un dato sin interes. (elementos) seria el array y va sustituit  numero*/ 
function mostrarArray(elementos,textoCustom = ""){
    document.write("<h2>Contenido del Array" + textoCustom + " : </h2>");
    elementos.forEach((elemento, index) => {
        document.write("<h3><strong>" + elemento + "</strong></br></h3>");
    });
}


//ORDENAR Y MOSTRAR:es un orden alfavetico.
numeros.sort();
//console.log(numeros);
//cuando yo quiero volver a mostrar ordenado(orden alfavetico) la llamo por aki:
mostrarArray(numeros, " ordenado alfabético");
//BUSQUEDA+
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h4> ENCONTRADO </h4>");
    document.write("<h4> POSICION DE LA BUSQUEDA:" +posicion+ " </h4>");
}else{
    document.write("<h4>NO ENCONTRADO</h4>");
}


//para orden numerico descendente
numeros.sort(function(a,b){return b-a});
mostrarArray(numeros, " ordenado descendente ")
//BUSQUEDA+
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h4> ENCONTRADO </h4>");
    document.write("<h4> POSICION DE LA BUSQUEDA:" +posicion+ " </h4>");
}else{
    document.write("<h4>NO ENCONTRADO</h4>");
}
//para orden numerico ascendente
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, " ordenado ascendente");
//BUSQUEDA+
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h4> ENCONTRADO </h4>");
    document.write("<h4> POSICION DE LA BUSQUEDA:" +posicion+ " </h4>");
}else{
    document.write("<h4>NO ENCONTRADO</h4>");
}

//INVERTIR Y MOSTRAR.
numeros.reverse();
mostrarArray(numeros, " ordenado inverso");
//BUSQUEDA+
var busqueda = parseInt(prompt("Busca un numero", 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h4> ENCONTRADO </h4>" );
    document.write("<h4> POSICION DE LA BUSQUEDA:" +posicion+ " </h4>");
}else{
    document.write("<h4>NO ENCONTRADO</h4>");
}

//CONTAR ELEMENTO
document.write("<h3>El array tiene " + numeros.length +" elementos</h3>");


