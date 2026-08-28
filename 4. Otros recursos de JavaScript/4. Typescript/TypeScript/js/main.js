"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Variables
const id = "01018jyb";
const age = 25;
const hasCat = true;
const dada = null;
const noDefine = undefined;
const unknown = true;
let productName;
productName = "Laptop";
productName = 1000;
// Arrays
let numbers = [1, 2, 3, 4, 5];
let students = ["John", "Jane", "Jack"];
let validationbs = [true, false, true];
let arr = [1, "John", true, null, undefined];
let mixed = ["John", 25, "Jane", 30];
// Tuple
let tuple = ["John", 25, true];
// OBJETOS 
let dog = {
    name: "Duke",
    age: 12,
    isPatient: true
};
let car = {
    brand: "Vw",
    model: "Mazda",
    year: 2020,
    owner: null,
    isNew: true
};
// Funciones 
const sayHello = (name, age) => {
    if (age) {
        return "Hola " + name + " tienes " + age + " años";
    }
    else {
        return "Hola" + name;
    }
};
sayHello("David", 23);
//# sourceMappingURL=main.js.map