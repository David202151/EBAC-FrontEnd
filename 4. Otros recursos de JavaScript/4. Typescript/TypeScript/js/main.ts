// Variables
const id: string = "01018jyb";
const age : number = 25;
const hasCat : boolean = true; 
const dada : null = null; 
const noDefine : undefined = undefined;
const unknown : any = true; 


let productName : string | number;
productName = "Laptop";
productName = 1000;


// Arrays

let numbers : number[] = [1, 2, 3, 4, 5];
let students : string[] = ["John", "Jane", "Jack"];
let validationbs : boolean[] = [true, false, true];
let arr : any[] = [1, "John", true, null, undefined]; 
let mixed : (string | number)[] = ["John", 25, "Jane", 30];

// Tuple
let tuple : [string, number, boolean] = ["John", 25, true];


// OBJETOS 

let dog : {
    name: string, 
    age: number, 
    isPatient: boolean
} = {
    name: "Duke", 
    age: 12, 
    isPatient: true
}

// Interface

interface Car {
    brand: string, 
    model: string, 
    year: number, 
    owner?: string | null, 
    isNew: boolean
}

let car : Car = {
    brand: "Vw", 
    model: "Mazda", 
    year: 2020, 
    owner: null, 
    isNew: true
}

// Funciones 

const sayHello = (name : string, age? : number) : string => {
    if(age){
        return "Hola " + name + " tienes " + age + " años"; 
    }
    else{
        return "Hola" + name; 
    }
}

sayHello("David", 23); 
