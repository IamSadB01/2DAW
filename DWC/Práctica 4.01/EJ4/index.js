"use strict";

import { toggleAcordeon } from "../Biblioteca/biblioteca.js";

window.onload = () => {
    const items = document.querySelectorAll('.item');

    // Agrega un evento de clic a cada elemento "item".
    items.forEach((item, index) => {
        const titulo = item.querySelector('.titulo');
        const contenido = item.querySelector('.contenido');

        // Agrega un evento de clic al elemento "titulo".
        titulo.addEventListener('click', () => {
            if (index % 2 === 0) { // Si el índice es par, muestra/oculta el contenido siguiente.
                toggleAcordeon(contenido);
            }
        });
    });
}
