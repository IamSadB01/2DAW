"use strict";

import { agregarDisco, mostrarDiscos, limpiarFormulario } from '../biblioteca/biblioteca.js';

window.onload = () => {
    const nombreInput = document.getElementById('nombre');
    const grupoInput = document.getElementById('grupo');
    const anioInput = document.getElementById('anio');
    const tipoInput = document.getElementById('tipo');
    const localizacionInput = document.getElementById('localizacion');
    const prestadoInput = document.getElementById('prestado');
    const mostrarButton = document.getElementById('mostrarButton');

    const guardarButton = document.getElementById('guardarButton');

    guardarButton.addEventListener('click', () => {
      const nuevoDisco = {
        nombre: nombreInput.value,
        grupo: grupoInput.value,
        anio: anioInput.value,
        tipo: tipoInput.value,
        localizacion: localizacionInput.value,
        prestado: prestadoInput.checked,
      };
  
      agregarDisco(nuevoDisco);
      limpiarFormulario();
    });

    mostrarButton.addEventListener('click', () => {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.textContent = mostrarDiscos();
    });
};
