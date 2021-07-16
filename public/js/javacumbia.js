const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    secTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnRight.addEventListener("click", function(){
    Next();
});
btnRight.addEventListener("click", function(){
    Prev();
});
function Prev() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }), 500;
}
//hamburger//
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
//hamburger//
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
//seccion-comentario//
const mensaje=document.getElementById('comentario')
const formulario=document.querySelector('.formulario-contacto')


mensaje.addEventListener('input',leerMensaje)
formulario.addEventListener('submit',validarFormulario)

var seccionMensaje = { 
    mensaje:''
};

function leerMensaje(evento){
    seccionMensaje.mensaje=evento.target.value;
    console.log(seccionMensaje);
}

function mostrarMensajeError(mensaje) {
    const bloqueError=document.createElement('p');
    bloqueError.textContent=mensaje;
    bloqueError.classList.add('mensajeError');
    formulario.appendChild(bloqueError);
    setTimeout(function(){
        bloqueError.remove();
    }, 5000 );
}

function mostrarMensajeOk(mensaje) {
    const bloqueok=document.createElement('p');
    bloqueok.textContent=mensaje;
    bloqueok.classList.add('mensajeOk');
    formulario.appendChild(bloqueok);
    setTimeout(function(){
        bloqueok.remove();
    }, 5000 );
}

function mostrarMensaje(mensaje,bandera){
    const bloque=document.createElement('p');
    bloque.textContent=mensaje;
    if(bandera==='correcto'){
        bloque.classList.add('mensajeOk');
    } else {
        bloque.classList.add('mensajeError');
    }
    formulario.appendChild(bloque)

    setTimeout(function(){
        bloque.remove();
    }, 5000 );
}

function validarFormulario(evento) {
    evento.preventDefault();
    if(seccionMensaje.mensaje===''){
        mostrarMensajeError("No has ingresado un comentarios que ofrecer");
        return;
    }
    mostrarMensajeOk("Gracias por su comentario, lo tendremos en cuenta.")
}

function activarDarkMode() {
    const fondoPagina = document.body;
    const titulo1 = document.querySelectorAll(".section-title")[0];
    const titulo2 = document.querySelectorAll(".section-title")[1];
    const titulo3 = document.querySelectorAll(".section-title")[2];
    const titulo4 = document.querySelectorAll(".section-title")[3];
    const titulo5 = document.querySelectorAll(".section-title")[4];
    const titulo6 = document.querySelectorAll(".section-title")[5];
    const parrafo1 = document.querySelector("p.que_es");
    const parrafo2 = document.querySelectorAll("p.que_es")[1];
    const subtitulo = document.querySelector(".subtitulo");
    const subtitulo2 = document.querySelectorAll(".subtitulo")[1];
    const subtitulo3 = document.querySelectorAll(".subtitulo")[2];

    titulo1.classList.toggle('dark-mode');
    titulo4.classList.toggle('dark-mode');
    titulo5.classList.toggle('dark-mode');
    titulo6.classList.toggle('dark-mode');
    parrafo1.classList.toggle('dark-mode');
    parrafo2.classList.toggle('dark-mode');
    subtitulo.classList.toggle('dark-mode');
    subtitulo2.classList.toggle('dark-mode');
    subtitulo3.classList.toggle('dark-mode');
    titulo2.classList.toggle('dark-mode');
    titulo3.classList.toggle('dark-mode');
    fondoPagina.classList.toggle('dark-mode');
}
const botonDarkMode = document.querySelector('.boton-dark-mode');
botonDarkMode.addEventListener('click', activarDarkMode);
