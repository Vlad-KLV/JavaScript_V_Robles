"use strict"
const personajesMarvel = ["Black Widow (Natasha Romanoff)", "Capitán América (Steve Rogers)", "Capitana Marvel (Carol Danvers)", "Deadpool (Wade Wilson)", "Hulk (Bruce Banner)", "Spider-Man (Peter Parker)", "Iron Man (Tony Stark)", "Wolverine (James Howlett)"]

console.log(personajesMarvel);

let vacioParaModificado = [];

personajesMarvel.forEach(dividir);

function dividir(i, index) {
    let modificado = i.split(/[()]/);
    modificado.pop();
    modificado[0] = modificado[0].slice(0, -1);



    vacioParaModificado.push(modificado);


};
console.log("vacio  :" + JSON.stringify(vacioParaModificado, null, '\t'));