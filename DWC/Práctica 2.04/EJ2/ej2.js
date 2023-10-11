"use strict";

// Función que dibuja y muestra un marco
function dibujarMarco(tamañoExterior, tamañoInterior) {
    if (tamañoExterior <= tamañoInterior || (tamañoExterior - tamañoInterior) % 2 !== 0) {
        console.log("Los parámetros proporcionados no son válidos.");
        return;
    }

    let margen = (tamañoExterior - tamañoInterior) / 2; // Calcula el tamaño del marco en la parte superior e inferior.
    let cont = 0;
    let linea = "";
    
    /* 
     * Bucle que imprime una línea con '#' del tamaño del marco (indicado en la ejecución de la función) cuando...
     * ... el número de fila es menor que el margen, o cuando el número de fila es mayor o igual al tamaño del marco menos el tamaño del margen.
     * E imprime una línea con '# . #' cuando no se cumplen las 2 condiciones anteriores.
     * El tamaño de las líneas interiores dependen del ancho del margen y del tamaño interior.
     */
    for (let fila = 0; fila < tamañoExterior; fila++) {
        if (fila < margen || fila >= tamañoExterior - margen) {
            linea = "#".repeat(tamañoExterior) + " " + cont;
            cont++;
        } else {
            linea = "#".repeat(margen) + ".".repeat(tamañoInterior) + "#".repeat(margen) + " " + cont;
            cont++;
        }
        console.log(linea);
    }
}

// Ejecutar la función
dibujarMarco(21,7);