"use strict";

// Función que dibuja y muestra una cruz griega
function dibujarCruz(tamaño) {
    if (tamaño % 3 !== 0) {
        console.log("El número proporcionado no es múltiplo de tres.");
        return;
    }
    
    let tercio = tamaño / 3;
    let linea = "";
    let cont = 1;
    
    // Crea un patrón definido utilizando .repeat dependiendo de la línea en la que se encuentre.
    for (let fila = 0; fila < tamaño; fila++) {
        if (fila >= tercio && fila < 2*tercio) {
            linea = ".".repeat(tamaño) + cont;
            cont++
        } else {
            linea = "#".repeat(tercio) + ".".repeat(tercio) + "#".repeat(tercio) + cont;
            cont++;
        }
        console.log(linea);
    }
}

// Ejecutar la función
dibujarCruz(21);