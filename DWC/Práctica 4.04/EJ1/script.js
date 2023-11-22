"use strict";

import { generarNumeroAleatorio, crearCheckbox, marcarTodosPares, desmarcarTodos } from "../biblioteca/biblioteca.js";

window.onload = () => {
    // Crear 100 elementos checkbox con números aleatorios.
    for (let i = 0; i < 100; i++) {
        const numeroAleatorio = generarNumeroAleatorio();
        crearCheckbox(numeroAleatorio);
    }

    // Botón para marcar todos los pares.
    const buttonContainer = document.getElementById("button-container");
    const marcarParesButton = document.getElementById("markEven");

    marcarParesButton.textContent = "Marcar todos los pares";
    marcarParesButton.addEventListener("click", marcarTodosPares, false);

    buttonContainer.appendChild(marcarParesButton);

    // Botón para desmarcar todos.
    const desmarcarButton = document.getElementById("uncheckAll");

    desmarcarButton.textContent = "Desmarcar todos";
    desmarcarButton.addEventListener("click", desmarcarTodos, false);

    buttonContainer.appendChild(desmarcarButton);
};
