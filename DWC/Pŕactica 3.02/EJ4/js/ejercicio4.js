'use strict';

var imagenes = ["../media/1.png", "../media/2.png", "../media/3.png", "../media/4.png"];

let indiceActual = 0;

function mostrarImagen() {
    const elementoImagen = document.getElementById('imagenCarrusel');
    
    elementoImagen.style.opacity = "0"; // Restablecer opacidad.

    // Esperar a que la opacidad llegue a 0 antes de cambiar la fuente de la imagen.
    setTimeout(function() {
        elementoImagen.src = imagenes[indiceActual];
        
        aparecerGradualmente(elementoImagen, 0);
        indiceActual = (indiceActual + 1) % imagenes.length; // Pasar a la siguiente imagen.

    }, 500); // Otorgando medio segundo para que se complete la transición de desaparición.
}

function aparecerGradualmente(elemento, opacidad) {
    opacidad += 0.05; // Incrementando opacidad en 0.05 para el efecto de aparición.
    elemento.style.opacity = opacidad;

    if (opacidad < 1) {
        setTimeout(function() {
            aparecerGradualmente(elemento, opacidad);
        }, 50); // Esto nos dará un incremento en opacidad de 0.05 cada 50ms.
    }
}

setInterval(mostrarImagen, 2000); // Cambiar la imagen cada 2 segundos.