"use strict";

function insertAfter(nuevoElemento, existenteElemento) {
    if (existenteElemento.nextSibling) {
        // Si hay un siguiente nodo después del existenteElemento, insertamos el nuevoElemento antes de este.
        existenteElemento.parentNode.insertBefore(nuevoElemento, existenteElemento.nextSibling);
    } else {
        // Si el existenteElemento es el último nodo, simplemente añadimos el nuevoElemento al final.
        existenteElemento.parentNode.appendChild(nuevoElemento);
    }
}

// Ejemplo de uso.
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "¡Hola, soy un párrafo recién agregado!";
nuevoParrafo.className = "nuevo";

let parrafoExistente = document.getElementById("parrafoExistente");

// Usamos la función para insertar el nuevo parrafo después del parrafo existente.
insertAfter(nuevoParrafo, parrafoExistente);