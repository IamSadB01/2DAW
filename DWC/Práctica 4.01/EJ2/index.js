"use strict";

import { cambiarColorDeFondo } from '../Biblioteca/biblioteca.js';

window.onload = () => {
    // Agregar un evento de doble clic a toda la ventana el cual le cambie el color.
    window.addEventListener("dblclick", cambiarColorDeFondo);
}
