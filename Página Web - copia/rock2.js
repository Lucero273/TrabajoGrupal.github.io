
//ANIMACIONES DEL MENU DE LA PÁGINA
function cambiarClase() {
    let menuPrincipal = document.getElementById('menu-principal');
    menuPrincipal.classList.toggle('menu-principal-open');
    let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('menu-open')
}



// DARK MODE

function activarDarkMode() {
    const fondoPagina = document.body;
    const titulo1 = document.querySelectorAll(".section-title")[0];
    const titulo2 = document.querySelectorAll(".section-title")[1];
    const titulo3 = document.querySelectorAll(".section-title")[2];
    const titulo4 = document.querySelectorAll(".section-title")[3];
    const parrafo1 = document.querySelector("p.que_es");
    const parrafo2 = document.querySelectorAll("p.que_es")[1];
    const subtitulo = document.querySelector(".subtitulo");
    const subtitulo2 = document.querySelectorAll(".subtitulo")[1];
    const subtitulo3 = document.querySelectorAll(".subtitulo")[2];

    titulo1.classList.toggle('dark-mode');
    titulo4.classList.toggle('dark-mode');
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

