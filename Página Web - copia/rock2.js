//ANIMACIONES DEL MENU DE LA PÁGINA
function cambiarClase(){
    let menuPrincipal = document.getElementById('menu-principal');
        menuPrincipal.classList.toggle('menu-principal-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open')
}

//Animaciones al body
function cambiarFondo1(){
    document.getElementById('cambiar-fondo1').style.backgroundColor="#EFF6E0";
}

function cambiarFondo2(){
    document.getElementById('cambiar-fondo2').style.backgroundColor="#EDE8E9";
}