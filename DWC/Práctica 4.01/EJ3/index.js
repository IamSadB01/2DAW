"use strict";

import { mostrarPosicionRaton } from "../Biblioteca/biblioteca.js";

window.onload = () => {
    const posicionRatonElement = document.getElementById("posicionRaton");

    // Mostrar posición del ratón.
    window.addEventListener('mousemove', (event) => {
        mostrarPosicionRaton(event, posicionRatonElement);
    });
}