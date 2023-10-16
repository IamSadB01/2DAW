"use strict";

// Función para determinar si un número es primo.
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    let i = 5;

    while (i * i <= numero) { // Si numero no tiene divisores menores que su raíz cuadrada, no tendrá divisores mayores que su raíz cuadrada.
        if (numero % i === 0 || numero % (i + 2) === 0)
            return false;

        i += 6; // Optimización de la comprobación, ya que 6, 8, 9, 10 son divisibles por 2 o 3 y no es necesario comprobarlos, se pasa directamente al 11.
    }

    return true;
}

// Función para resaltar los números primos en la tabla.
function resaltarPrimos() {
    for (let i = 1; i <= 100; i++) {
        if (esPrimo(i)) {
            document.getElementById(`celda-${i}`).classList.add("primo");
        }
    }
}

// Función para crear la tabla 10x10.
function crearTabla() {
    const tabla = document.getElementById("tablaNumeros");
    let contador = 1;

    for (let i = 0; i < 10; i++) {
        const fila = tabla.insertRow();

        for (let j = 0; j < 10; j++) {
            const celda = fila.insertCell();
            celda.innerText = contador;
            celda.id = `celda-${contador}`;
            contador++;
        }
    }
}

// Crear la tabla al cargar la página.
window.onload = crearTabla;
