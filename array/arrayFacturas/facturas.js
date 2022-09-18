"use strict"
const facturas = [
    {
        precio:13,
        cantidad:3

    },
    {
        precio:31,
        cantidad:13

    }, {
        precio:33,
        cantidad:3

    }, {
        precio:133,
        cantidad:31

    }
    
]
 
const IVA = 1.21;
const totalFactura=facturas.map(i=>i.precio*i.cantidad*IVA);

totalFactura.forEach((i,index)=>console.log("elemento", index, i));
//console.log(totalFactura)