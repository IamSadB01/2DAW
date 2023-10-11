/*

Crea otras dos funciones con idéntico comportamiento que las
anteriores pero en esta ocasión los arrays con los que trabajará
serán bidimensionales. Para crear un array bidimensional en
JavaScript debes usar un array de arrays de este modo:

var tablero=[[0, 0, 0], [0, 0, 0], [0, 0, 0]];

*/

"use strict";

// Crea un array bidimensional de 9x9 y llena cada posición con un número aleatorio entre 1 y 9.
function llenarArrayBidimensionalAleatorio() {
    let tablero = [];
    
    for (let i = 0; i < 9; i++) {
        let fila = [];
        
        for (let j = 0; j < 9; j++) {
            fila.push(Math.floor(Math.random() * 9) + 1);
        }
        
        tablero.push(fila);
    }

    return tablero;
}

// Verifica si hay números repetidos en un array bidimensional transformándolo primero a unidimensional y comparándolos.
function verificarRepetidosBidimensional(tablero) {
    let unidimensional = [].concat(...tablero); // convertir el array en 2 unidimesionales y combinar los sub-arrays utilizando concat.
    
    for (let fila = 0; fila < unidimensional.length; fila++) {
        for (let columna = fila + 1; columna < unidimensional.length; columna++) {
            if (unidimensional[fila] === unidimensional[columna]) {
                console.log("Hay números repetidos en el tablero.");
                return true;
            }
        }
    }

    console.log("No hay números repetidos en el tablero.");
}

// Ejemplo de uso:
const tableroAleatorio = llenarArrayBidimensionalAleatorio();
console.log("Tablero generado:");
console.log(tableroAleatorio.map(fila => fila.join(' | ')).join('\n'));
verificarRepetidosBidimensional(tableroAleatorio);