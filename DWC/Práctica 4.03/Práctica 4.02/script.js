"use strict";

import { colocarImagenes, validarPuzzle } from "./biblioteca/biblioteca.js";

window.onload = () => {
    colocarImagenes();

    // Agrega un evento de arrastre a los elementos en el contenedor general.
    document.getElementById("contenedorGeneralArrastable").addEventListener(
        "dragstart",
        (event) => {
            event.dataTransfer.setData("id", event.target.id);
        },
        false
    );

    // Permite que los elementos se puedan soltar en el contenedor general.
    document.getElementById("contenedorGeneralArrastable").addEventListener(
        "dragover",
        (event) => {
            event.preventDefault();
        },
        false
    );

    // Maneja el evento cuando un elemento es soltado en el contenedor general.
    document.getElementById("contenedorGeneralArrastable").addEventListener(
        "drop",
        (event) => {
            event.preventDefault();
            if (event.target.classList.contains("soltable") || event.target.id == "contenedorImagenes") {
                let elemento = document.getElementById(event.dataTransfer.getData("id"));
                event.target.appendChild(elemento);

                // Obtiene el índice del elemento en el contenedorPuzzle.
                let contenedorPuzzle = document.getElementById("contenedorPuzzle").children;
                let index;

                for (let i = 0; i < contenedorPuzzle.length; i++) {
                    if (contenedorPuzzle[i] == event.target) {
                        index = i + 1;
                    }
                }

                // Comprueba si la imagen ha sido colocada en el lugar correcto y la valida.
                if (elemento.getAttribute("src").charAt(6) == index) {
                    elemento.classList.add("validado");
                } else {
                    if (elemento.classList.contains("validado")) {
                        elemento.classList.remove("validado");
                    }
                }
            }

            validarPuzzle();
        },
        false
    );

    // Agrega un evento al botón de reinicio para recargar la página.
    document.getElementById("reiniciar").addEventListener(
        "click",
        () => {
            location.reload(); // Recarga la página reiniciando el juego.
        },
        false
    );
};