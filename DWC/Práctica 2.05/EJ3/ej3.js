"use strict";

let listaDnis = [];

// Función que obtiene la letra correspondiente a un número de DNI
function obtenerLetraDni(numero) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    return letras[numero % 23];
}

// Función que solicita al usuario su número de DNI cada 5 segundos
function solicitarDni() {
    const idIntervalo = setInterval(() => {
        const entrada = prompt("Introduce tu número de DNI sin letra (escribe -1 para terminar):");
        
        if (entrada === "-1") {
            clearInterval(idIntervalo); // Detiene la repetición de la solicitud
            let letras = listaDnis.map(obtenerLetraDni).join(' ');
            console.log("Letras de los DNI introducidos:", letras);
        } else if (entrada && !isNaN(entrada) && parseInt(entrada) > 0 && parseInt(entrada) < 100000000) {
            listaDnis.push(parseInt(entrada)); // Añade el DNI válido a la lista
        } else {
            console.log("Por favor, introduce un número de DNI válido.");
        }
    }, 5000);
}

// Ejecución de la función
solicitarDni();