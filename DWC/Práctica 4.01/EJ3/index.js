"use strict";

import { mostrarPosicionRaton } from "../Biblioteca/biblioteca.js";

window.onload = () => {
    const posicionRatonElement = document.getElementById("posicionRaton");

    window.addEventListener('mousemove', (event) => {
        mostrarPosicionRaton(event, posicionRatonElement);
    });
}