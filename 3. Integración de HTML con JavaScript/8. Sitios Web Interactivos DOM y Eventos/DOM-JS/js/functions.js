//--------- Seleccionar elementos ---------------------------------------------------
//alert("Hola mundo");
const title = document.getElementById("txt");
// console.log(title);

const image = document.getElementsByClassName("banner");
// console.log(image[3]); 

const tags = document.getElementsByTagName("article"); 
//console.log(tags[5]); 

const element = document.querySelectorAll(".banner"); 
//console.log(element); 

//------------ Crear elementos y agregar atributos  -------------------------------
const parent = document.querySelector(".products"); 
const newElement = document.createElement("article"); 
newElement.setAttribute("class", "new_element "); 
parent.append(newElement); 
    
//-------------- Attributes----------------------------------------------------------

const logo = document.querySelector(".logo"); 
//logo.setAttribute("src", "img/carrito.png"); 
console.log(logo.getAttribute("src")); 
//console.log(logo.hasAttribute("src")); 
if(logo.hasAttribute("src")){
    //alert("Tiene atributo src");
    //logo.removeAttribute("src"); 
}; 

// ------------------ CSS Clases --------------------------------------------------

const parent2 = document.querySelector(".products"); 
const parent3 = parent2.firstElementChild;
const price = parent3.lastElementChild 
console.log(price.hasAttribute("src")); 
if(price.hasAttribute("id")){
    price.classList.add("green");
}
else{
    price.classList.add("red");
}; 

price.classList.replace("red", "green");
//price.classList.remove("red"); 

//---------------- Modificar texto -------------------------------------------------
const button = document.getElementsByTagName("button"); 
console.log(button[0].innerText); 
button[0].innerText = "BUY"; 

//---------------- Modificar style -------------------------------------------------

//button[0].style.backgroundColor = "red"; 

//---------------- EVENTOS --------------------------------------------------------
//console.log(button[0]); 
button[0].addEventListener("click", () => {
    button[0].classList.toggle("toggle"); 
}); 

const iconRemove = document.querySelectorAll(".delete-icon");  
//console.log(iconRemove); 
iconRemove.forEach(elem => {
    elem.addEventListener("click", () => {
        elem.parentElement.remove(); 
    }); 
}); 



const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

const mouseEvent = document.querySelector(".mouse");
mouseEvent.addEventListener("mouseenter", () => {
    mouseEvent.style.opacity = "0.5";
});
mouseEvent.addEventListener("mouseleave", () => {
    mouseEvent.style.opacity = "1";
});


/*
const delete_icon = document.getElementsByClassName("delete-icon"); 
const section = document.getElementsByClassName("cart")[0];
console.log(section); 
const divs = section.getElementsByTagName("div"); 
console.log(divs); 

for (let i = 0; i < delete_icon.length; i++){
    console.log(i); 
    delete_icon[i].addEventListener("click", () => {
        alert("Click en eliminar " + i ); 
        delete_icon[i].parentElement.remove(); 
    });
}
*/

