
// CORE MODULES
const http = require('http'); 
const sayHello = require('./local-module.js'); 
/*
http.createServer((request, response) =>{
    response.write("Hola mundo desde NODE JS!!!");
    response.end(); 
}).listen(3000); 
*/
sayHello();

// NPM Node Package Manager

