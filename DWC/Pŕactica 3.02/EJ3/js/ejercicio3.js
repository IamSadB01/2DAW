'use strict';

// Función para ocultar un elemento,
function ocultarelementoo(elemento) {
    elemento.style.visibility = 'hidden'; // Cambia la visibilidad del elemento a oculto.
}

// Función para cambiar el color de fondo de un elemento al azar.
function cambiarColor(elemento) {
    elemento.style.backgroundColor = getRandomColor(); // Asigna un color aleatorio al elemento.
}

// Función para generar un color aleatorio en formato hexadecimal.
function getRandomColor() {
    const letters = '0123456789ABCDEF'; // Caracteres para generar un color hexadecimal.
    let color = '#';

    // Loop para seleccionar 6 caracteres de la lista de letras de forma aleatoria.
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color; // Devuelve el color en formato hexadecimal.
}

// Función para hacer que todos los párrafos con la clase 'parrafo' reaparezcan con un color de fondo gris claro.
function reaparecer() {
    const parrafo = document.querySelectorAll('.parrafo'); // Selecciona todos los elementos con la clase 'parrafo'.

    // Itera sobre cada párrafo y cambia su visibilidad y color de fondo.
    parrafo.forEach(p => {
        p.style.visibility = 'visible';
        p.style.backgroundColor = '#e0e0e0';
    });
}