// SCOPE
//SCOEP GLOBAL
var x = 23; 
function y(){
  console.log(x); 
}; 
y(); 
console.log(x); 

// SCOPE DE BLOQUE 

const boo = true; 
const text = "s"; 
if(boo){
  const text = "Hola mundooo"; 
}; 
console.log(text); 

// SCOOP DE BLOQUE CON VAR


if(boo){
  var num = 14; 
  console.log(num); 
}
console.log(num); 


// SCOPE DE FUNCIONES
var say; 
function sayHello(){
  say = "Hola David"; 
  console.log(say); 
}; 
sayHello(); 
console.log(say);












