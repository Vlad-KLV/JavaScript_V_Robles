"use strict"
 function calculadora(n1,n2){
    document.write("suma es" + " "+( n1+n2) + "</br>");
    document.write("resta es "+( n1-n2)+ "</br>");
    document.write("multiplicacion es "  +( n1*n2)+ "</br>");
    document.write("division es" + " "+( n1/n2)+ "</br>");
    //document.write("**************"+ "</br>");
 
 }
/*
 calculadora(34,56); 
 calculadora(56,56);
 calculadora(98,56);
 calculadora(55546,56);*/
 

for(var i = 1; i<=10; i++){
    document.write(i +"</br>")
    calculadora(i,15);
};



    
  