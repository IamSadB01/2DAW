/*

Crea dos funciones que realicen la siguiente tarea:

• la primera debe llenar un array de forma aleatoria con nueve
números comprendidos entre el 1 y el 9.

• la segunda debe recibir un array con nueve números y comprobar
si alguno se repite. Si es así, informará al usuario con un mensaje
debidamente formateado.

*/

"use strict";

function llenarArrayAleatorio() {
    const numeros = [];

    // Agrega numeros aleatorios al array
    for (let i = 0; i < 9; i++) {
        numeros[i] = Math.floor(Math.random() * 9) + 1;
    }

    return numeros;
}

// Compara todas las posiciones de 2 arrays para buscar números repetidos
function verificarRepetidos(array) {
    for (let fila = 0; fila < array.length; fila++) {
        for (let columna = fila + 1; columna < array.length; columna++) { // La columna tiene el valor de la fila + 1 para evitar redundancia.
            if (array[fila] == array[columna]) {
                console.log("Hay números repetidos en el array.");
                return true;
            }
        }
    }
    console.log("No hay números repetidos.");
}

// Ejemplo de uso:
const randomArray = llenarArrayAleatorio();
console.log(`Array generado: ${randomArray}`);
verificarRepetidos(randomArray);