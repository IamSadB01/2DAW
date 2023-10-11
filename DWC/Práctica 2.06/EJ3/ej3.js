/*

Con todas las funciones elaboradas en los dos ejercicios anteriores,
haz un programa que sea capaz de comprobar que la solución a un
sudoku es correcta. Recibirá por parámetro el array con los valores
del sudoku. 

Ten presente que un sudoku es un array bidimensional de nueve filas
por nueve columnas que a su vez se puede dividir en nueve arrays
bidimensionales de tres por tres.

*/

"use strict";

// Ejemplo de sudoku correcto.
let sudokuCorrecto = [];
sudokuCorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuCorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuCorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuCorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuCorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuCorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuCorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuCorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuCorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

// Ejemplo de sudoku incorrecto.
let sudokuIncorrecto = [];
sudokuIncorrecto[0] = [2, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuIncorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuIncorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuIncorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuIncorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuIncorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuIncorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuIncorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1]; 

// Verificar si hay números repetidos en un array unidimensional.
function verificarRepetidos(array) {
    let numerosVistos = {}; // Objeto vacío.
    for (let posicion = 0; posicion < array.length; posicion++) {
        const numero = array[posicion];
        if (numerosVistos[numero]) {
            return true; // Hay un número repetido.
        } else {
            numerosVistos[numero] = true;
        }
    }
    return false; // No hay números repetidos.
}

// Extraer columna de un tablero.
function extraerColumna(tablero, columnaIndex) {
    return tablero.map(fila => fila[columnaIndex]);
}

// Extraer un bloque 3x3.
function extraerBloque(tablero, bloqueFilaIndice, bloqueColumnaIndice) {
    let bloque = []; // Array vacío.
    for (let fila = 0; fila < 3; fila++) {
        for (let columna = 0; columna < 3; columna++) {
            if (!bloque[fila]) { // Si la fila 'fila' del bloque no existe aún, se inicializa como un nuevo array.
                bloque[fila] = [];
            }
            bloque[fila][columna] = tablero[bloqueFilaIndice*3 + fila][bloqueColumnaIndice*3 + columna]; // Extrae el valor del tablero en la posición correspondiente y lo coloca en la posición [fila][columna] del bloque.
        }
    }
    return bloque;
}

function esSolucionSudokuValida(tablero) {
    // Verificar filas y columnas.
    for (let posicion = 0; posicion < 9; posicion++) {
        if (verificarRepetidos(tablero[posicion]) || verificarRepetidos(extraerColumna(tablero, posicion))) {
            return false; // Hay repetidos en la fila o columna.
        }
    }

    // Verificar bloques 3x3.
    for (let fila = 0; fila < 3; fila++) {
        for (let columna = 0; columna < 3; columna++) {
            let bloque = extraerBloque(tablero, fila, columna);
            let elementosBloque = bloque.flat(); // Convertir bloque 3x3 a array unidimensional utilizando flat() (función que sirve para aplanar arrays anidados).
            if (verificarRepetidos(elementosBloque)) {
                return false; // Hay repetidos en el bloque 3x3.
            }
        }
    }

    return true; // El tablero es una solución de sudoku válida.
}

// Función para mostrar el sudoku.
function mostrarSudoku(tablero) {
    console.log("Sudoku:");
    tablero.forEach(fila => {
        console.log(fila.join(' | '));
    });
}

mostrarSudoku(sudokuCorrecto);

// Ejemplo de uso:
if (esSolucionSudokuValida(sudokuCorrecto)) {
    console.log("La solución de sudoku es válida.");
} else {
    console.log("La solución de sudoku no es válida.");
}