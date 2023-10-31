"use strict";

import { toggleAcordeon } from "../Biblioteca/biblioteca.js";

window.onload = () => {
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {
        const titulo = item.querySelector('.titulo');
        const contenido = item.querySelector('.contenido');

        titulo.addEventListener('click', () => {
            if (index % 2 === 0) { // Si el índice es par, muestra/oculta el contenido siguiente.
                toggleAcordeon(contenido);
            } /*else if (index % 2 === 1) {
                const elementoParAnterior = items[index - 1];
                const contenidoParAnterior = elementoParAnterior.querySelector('.contenido');
                toggleAcordeon(contenidoParAnterior);
            }*/
        });
    });
}
