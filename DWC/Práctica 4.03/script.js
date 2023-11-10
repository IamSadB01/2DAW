"use strict";

import { inicializarTablaDibujo, reiniciarTablaDibujo, seleccionarColor, comenzarDibujo, dibujar, dibujando} from './biblioteca/biblioteca.js';

window.onload = () => {
    const tablaDibujo = document.getElementById('drawingTable');
    const botonReiniciar = document.getElementById('resetButton');
    const colorSelector = document.getElementById('colorSelector');
    
    inicializarTablaDibujo(tablaDibujo);

    // Event listener para el botón de reiniciar.
    botonReiniciar.addEventListener('click', () => reiniciarTablaDibujo(tablaDibujo));

    // Event listener para el selector de color.
    colorSelector.addEventListener('click', (event) => {
        if (event.target.classList.contains('colorCell')) {
            seleccionarColor(event.target);
        }
    });

    // Al hacer clic, comienza a dibujar (o lo detiene si ya está dibujando).
    tablaDibujo.addEventListener('click', () => {
        comenzarDibujo();
    });

    // Al mover el ratón, dibuja.
    tablaDibujo.addEventListener('mouseover', (event) => {
        if (dibujando && event.target.tagName === 'TD') {
            dibujar(event.target);
        }
    });
};
