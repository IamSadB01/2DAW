"use strict";

import { crearParrafo } from '../biblioteca/biblioteca.js';

window.onload = () => {
    const botonCrear = document.getElementById('botonCrear');
    const textarea = document.getElementById('texto');
    const selectEstilos = document.getElementById('estilos');
    const resultadoDiv = document.getElementById('resultado');

    // Agregar evento al botón de crear.
    botonCrear.addEventListener('click', () => {
        // Obtener texto y estilo seleccionado.
        const texto = textarea.value;
        const estilo = selectEstilos.value;

        // Crear párrafo y agregar al resultadoDiv.
        const nuevoParrafo = crearParrafo(texto, estilo);
        if (nuevoParrafo) {
            resultadoDiv.appendChild(nuevoParrafo);
        }
    });
};

