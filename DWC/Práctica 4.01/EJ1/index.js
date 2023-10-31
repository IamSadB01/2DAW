"use strict";

import { iniciarSaludos } from '../Biblioteca/biblioteca.js';

window.onload = () => {
    const comenzarButton = document.getElementById("comenzarButton");
    const pararButton = document.getElementById("pararButton");
    const saludosContainer = document.getElementById("saludosContainer");

    iniciarSaludos(comenzarButton, pararButton, saludosContainer);
}