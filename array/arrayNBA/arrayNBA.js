"use strict"
/*
-1- Añadir elemento al final y al principio.
-2- Añadir entre elementos de array "New Orleans Pelicans" y"New York Knicks", 
-3- Extraer el primero y el ultimo elemento y mostrar los por la consola.
-4- Cambiar el valor:"Cleveland Cavaliers" y "Portland Trail Blazers"  .
-5- Mostrar cantidad de elementos.
-6- Mostrara por la consola equipos: Chicago Bulls , Los Angeles Lakers, Miami Heat
********************/
const equiposNBA = ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "Chicago Bulls", "Cleveland Cavaliers", "Dallas Mavericks", "Denver Nuggets", "Detroit Pistons", "Golden State Warriors", "Houston Rockets", "Indiana Pacers", "Los Angeles Clippers", "Los Angeles Lakers", "Memphis Grizzlies", "Miami Heat", "Milwaukee Bucks", "Minnesota Timberwolves", "New Orleans Pelicans", "New York Knicks", "Oklahoma City Thunder", "Orlando Magic", "Philadelphia 76ers", "Phoenix Suns", "Portland Trail Blazers", "Sacramento Kings", "San Antonio Spurs", "Toronto Raptors", "Utah Jazz", "Washington Wizards"]
/*
******************************1***************************
console.log(equiposNBA);
//1
equiposNBA.unshift("NBA");
equiposNBA.push("Temoprada NBA 22/23");
//2
equiposNBA.splice(19,0,"****************");
//3
const primerElemento = equiposNBA.shift();
console.log(primerElemento);
const ultimoElemento = equiposNBA.pop();
console.log(ultimoElemento);
//4
equiposNBA[6]="CLEVELAND CAVALIERS";
equiposNBA[25]="PORTLAND TRAIL BLAZERS"
//5
console.log(equiposNBA.length);
//6
console.log(equiposNBA[4]);
console.log(equiposNBA[13]);
console.log(equiposNBA[15]);
**********************************************/


//**********************2********************//
/*
console.log(equiposNBA);
//1
equiposNBA.unshift("NBA");
equiposNBA.push("Temporada NBA 22/23");
//2
equiposNBA.splice(19, 0, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//3
const primerElemento2 = equiposNBA.shift();
console.log(primerElemento2);
const ultimoElemento2 = equiposNBA.pop();
console.log(ultimoElemento2);
//4
equiposNBA[5]="CHICAGO BULLS";
equiposNBA[0]="ATLANTA HAWSK";
//5
console.log(equiposNBA.length);
//6
console.log(equiposNBA[4]);
console.log(equiposNBA[13]);
console.log(equiposNBA[15]);
*************************************************/


//************************3*********************/
console.log(equiposNBA);
//1
equiposNBA.push("NBA");
equiposNBA.unshift("Temporada NBA 22/23");
//2
equiposNBA.splice(19,0,"**************************");
//3
const primerElemento3 = equiposNBA.pop();
console.log(primerElemento3);
const ultimoElemento3 = equiposNBA.shift()
console.log(ultimoElemento3);
//4
equiposNBA[5]="Cambiando el valor";
equiposNBA[0]="Cambiando el valor";
//5
console.log(equiposNBA.length);
//6
console.log(equiposNBA[4]);
console.log(equiposNBA[13]);
console.log(equiposNBA[15]);



console.log(equiposNBA);







