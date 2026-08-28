// High Orden Function -- HOC
const createUser = (user, callback) => {
    const newUser = `User ${user} was created`;
    callback(newUser);
};
// Callback Function 
const logMessage = (str) => {
    console.log(str);
};
createUser("Juan", logMessage);

// Callback Hell

let buyIngredients = (person, next) => {
    console.log(`${person} esta comprando los ingredientes.`);
    next("carne");
};
let cook = (food, next) => {
    console.log(`Cocinando ${food}`);
    next("hamburgesa");
};
let serve = (cookedFood, next) => {
    console.log(`Sirviendo ${cookedFood}`);
    next("platos");
};
let washDishes = (dishes) => {
    console.log(`Lavando ${dishes}`);
};
buyIngredients("David", (meat) =>{
    cook(meat, (burger) => {
        serve(burger, (dishes) => {
        washDishes(dishes);
        });
    });
});



