/*Funcion del menu lateral*/

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener("click", () => {
    const menu = document.querySelector('.menu');
    menu.classList.add('active');
});

/*Funcion para cerrar el menu lateral*/

const closeItenMenu = document.querySelector('.close');
closeItenMenu.addEventListener(("click"), () => {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
});

/*Funcion adicional para las opciones del menu*/ 

const opcionesMenu = document.querySelectorAll('.opciones-menu');

opcionesMenu.forEach((opcion) => {
    opcion.addEventListener("mouseenter", () => {
        opcion.classList.add("active-menu");
    });
});
opcionesMenu.forEach((opcion) => {
    opcion.addEventListener("mouseleave", () => {
        opcion.classList.remove("active-menu");
    });
});

/*Funcion para agregar al carrito*/

// Cambia esta parte del JS
const addCartButtons = document.querySelectorAll('.add-cart');
addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.closest('.products__card');

        const nameProduct = product.querySelector('.products__name').textContent;
        const priceProduct = product.querySelector('.products__price').textContent;
        const imageProduct = product.querySelector('.products__img'); // <-- ahora si la encuentra

        const cart = document.querySelector(".cart");
        const newElementCart = document.createElement("div");
        const newImg = document.createElement("img");
        newImg.setAttribute("src", imageProduct.getAttribute("src"));
        cart.appendChild(newElementCart);
        newElementCart.appendChild(newImg);
        const newName = document.createElement("p");
        newName.innerText = nameProduct;
        const newPrice = document.createElement("p");
        newPrice.innerText = priceProduct;
        newElementCart.appendChild(newName);
        newElementCart.appendChild(newPrice);
        const newDelete = document.createElement("i");
        const newDeleteImg = document.createElement("img");
        newDeleteImg.setAttribute("src", "img/quitar-carrito.png");
        newDeleteImg.setAttribute("class", "delete-icon");
        newElementCart.appendChild(newDelete);
        newDelete.appendChild(newDeleteImg);
    });
});

/*Funcion para mostrar el carrito
const cart = document.querySelector(".cart-icon");
cart.addEventListener("click", () => {
    const cart_active = document.querySelector(".cart");
    cart_active.classList.toggle("active");
});
*/
// Funcion adicional para eliminar los elemnetos del carrito dinamicamente 
// Esta parte del codigo esta pendiente al evento (e) y donde sucede (target)
// y si el elemento que se esta clickeando tiene la clase "delete-icon" entonces 
// se elimina el producto del carrito
const cartContainer = document.querySelector(".cart");
cartContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-icon")){
        const item = e.target.parentElement.parentElement;
        item.remove();
    }
});

//Funcionalidad para mostrar el numero de productos en el carrito
const cartCount = document.querySelector(".cart-count");
let count = 0;
addCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;
    });
});
cartContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete-icon")){
        e.target.closest("div").remove();
        count--;
        cartCount.textContent = count;
    }
});



/* jQuery */ 
$(document).ready(
    function(){
        $(".products article:nth-child(2)").addClass("promo");
        $(".products article:first-child").removeClass("promo");
        // $(".header__logo").before("<p>Lo mejor de prendas</p>");
        $(".promo").append("<span class='tag'></span>");
        // $(".promo").prepend("<hr>");
        //$("article").after("<em>AFTER</em>");
        const txtJ = $(".txt").text(); 
        //console.log(txtJ); 
        $(".txt").text("HOLA MIUNDO !!!!!"); 
        const htmlJ = $("h2").html(); 
        //console.log(htmlJ); 
        $("h2").html("<i>jQuery</i>"); 

        $("h3").html("<i>Productos</i>"); 
        $(".promo h3:nth-child(1)").html("<i>Producto Destacado</i>"); 

        $(".products article:nth-child(3)").children().children().eq(1).html("<i>Hola</i>"); 
        const cssj = $(".cart__title").css("font-size"); 
        //console.log(cssj); 
        //$("img").attr("src", "https://http2.mlstatic.com/D_NQ_NP_914901-MLM72575196212_112023-O-grilletes-dragon-pharma-ankle-straps-gym-correas-de-tobillo.webp");
        $(".cart-icon").click( function(){
            $(".cart").toggleClass("active"); 
        });
        //console.log($(".cart-icon")); 
        //$(".formulario__name").val("Daniel"); 
        const valj = $(".formulario__name").val(); 
        console.log(valj); 

        /*EVENTOS jQuery */
        /*
        $("header button:first-child").click(function(){
            $(this).css("background-color", "red"); 
        });*/

        $(".mouse").mouseenter(function(){
            $(this).css("opacity", ".2"); 
        }); 
        $(".mouse").mouseleave(function(){
            $(this).css("opacity", "1"); 
        });
        $(document).scroll(function(){
            console.log("scroll"); 
        }); 

        $("input[type = 'text']").focus(function(){
            $(this).addClass("new-outline"); 
        });

        $(document).keyup(
            function(e){
                const cart = $(".cart"); 
                const cartHasActiveClass = $(".cart").hasClass("active");
                console.log(cartHasActiveClass);  
                console.log(e.keyCode);
                if(cartHasActiveClass && e.keyCode == 81){
                    cart.removeClass("active"); 
                } 
            }
        ); 
        $(".title-sc").click(function(){
            $("form").show();
        });
        $("input[type = 'button']").click(function(){
            $("form").hide();
        });

        $(".header__logo").click(function(){
            $(".modal").fadeIn(function(){
                //alert("Modal abierta");
            });
        });
        /*$(".modal i").click(function(){
            $(".modal").fadeOut();
        });*/
        $(".modal i").click(
            function(){
                $(this).parent().fadeOut(
                    function(){
                        //alert("Modal cerrado");
                    }
                );
            }
        );

        $(".show-form").click(function(){
            $(".formulario").slideDown();
        });

        $(".hide-form").click(function(){
            $(".formulario").slideUp();
        });

        $(".toggle-form").click(function(){
            console.log("toggle");
            $(".formulario").slideToggle();
        });

        $(document).keyup(
            function(e){
                const modal = $(".modal"); 
                if(e.keyCode == 65){
                    modal.fadeToggle(); 
                } 
            }
        ); 
        $(".tag").click(function(){
            $(".header__logo").animate({
                width: "55px",
                opacity: 0.5
            });
        });
    }
);