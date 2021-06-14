function imprimirConsola() {
    console.log("La pagina esta cargada");
} 

window.addEventListener('load', imprimirConsola);

window.addEventListener('scroll', function(){
    console.log('scrolling...');
})

function cambiarColor1(){
    document.getElementById("titulo1").style.backgroundColor="white";
    document.getElementById("titulo1").style.color="red";
}
function vuelveColor1(){
    document.getElementById("titulo1").style.backgroundColor="#ffffbf";
    document.getElementById("titulo1").style.color="gray";
}

function cambiarColor2(){
    document.getElementById("titulo2").style.backgroundColor="white";
    document.getElementById("titulo2").style.color="red";
}
function vuelveColor2(){
    document.getElementById("titulo2").style.backgroundColor="#ffffbf";
    document.getElementById("titulo2").style.color="gray";
}

function cambiarColor3(){
    document.getElementById("titulo3").style.backgroundColor="white";
    document.getElementById("titulo3").style.color="red";
}
function vuelveColor3(){
    document.getElementById("titulo3").style.backgroundColor="#ffffbf";
    document.getElementById("titulo3").style.color="gray";
}

function cambiarColor4(){
    document.getElementById("titulo4").style.backgroundColor="white";
    document.getElementById("titulo4").style.color="red";
}
function vuelveColor4(){
    document.getElementById("titulo4").style.backgroundColor="#ffffbf";
    document.getElementById("titulo4").style.color="gray";
}

const hamburger = document.querySelector('.header .nav-bar .nav-list .menu_generos');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});
menu_item.forEach((item) =>{
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

function activarDarkMode() {
    
    const fondoWeb=document.body;
    const mainContenedor=document.querySelector('main.contenedor');
    
    fondoWeb.classList.toggle("dark-mode");
    mainContenedor.classList.toggle("dark-mode");
    mainContenedor.classList.toggle('sombra-dark-mode');
    formulario.classList.toggle('formulario-dark-mode');
}
const botonDarkMode=document.querySelector('.boton-dark-mode');
botonDarkMode.addEventListener('click', activarDarkMode);

