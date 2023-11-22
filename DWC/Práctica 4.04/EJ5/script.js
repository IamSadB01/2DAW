"use strict";

import { validarFormularioDiscos } from '../biblioteca/biblioteca.js';

window.onload = () => {
  const enviarButton = document.getElementById('enviarButton');

  // Configurar evento de clic en el botón de envío.
  enviarButton.addEventListener('click', () => {
    validarFormularioDiscos();
  });
};
