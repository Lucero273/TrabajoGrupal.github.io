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

function pintar1(){
    document.getElementById("boton1").style.backgroundColor="#F8DE7E";
    document.getElementById("boton1").style.color="black";
}
function noPintar1(){
    document.getElementById("boton1").style.backgroundColor="#cb3234";
    document.getElementById("boton1").style.color="white";
}
function pintar2(){
    document.getElementById("boton2").style.backgroundColor="#F8DE7E";
    document.getElementById("boton2").style.color="black";
}
function noPintar2(){
    document.getElementById("boton2").style.backgroundColor="#cb3234";
    document.getElementById("boton2").style.color="white";
}
function pintar3(){
    document.getElementById("boton3").style.backgroundColor="#F8DE7E";
    document.getElementById("boton3").style.color="black";
}
function noPintar3(){
    document.getElementById("boton3").style.backgroundColor="#cb3234";
    document.getElementById("boton3").style.color="white";
}
function pintar4(){
    document.getElementById("boton4").style.backgroundColor="#F8DE7E";
    document.getElementById("boton4").style.color="black";
}
function noPintar4(){
    document.getElementById("boton4").style.backgroundColor="#cb3234";
    document.getElementById("boton4").style.color="white";
}
function pintar5(){
    document.getElementById("boton5").style.backgroundColor="#F8DE7E";
    document.getElementById("boton5").style.color="black";
}
function noPintar5(){
    document.getElementById("boton5").style.backgroundColor="#cb3234";
    document.getElementById("boton5").style.color="white";
}
function pintar6(){
    document.getElementById("boton6").style.backgroundColor="#F8DE7E";
    document.getElementById("boton6").style.color="black";
}
function noPintar6(){
    document.getElementById("boton6").style.backgroundColor="#cb3234";
    document.getElementById("boton6").style.color="white";
}




//-----------------------inicion de la seccion comentarios--------------------------------------//

const mensaje=document.getElementById('mensaje')
const formulario=document.querySelector('.seccion-comentario')


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
        mostrarMensaje("No has ingresado un comentarios que ofrecer");
        return;
    }
    mostrarMensaje("Gracias por su comentario, lo tendremos en cuenta.")
}


