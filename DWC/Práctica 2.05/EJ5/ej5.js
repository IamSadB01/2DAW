"use strict";

// Función que devuelve la letra correspondiente a un número de DNI
function obtenerLetraDni(numero) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
    return letras[numero % 23];
}

// Función que recibe una letra y verifica cuántos DNI en el rango tienen esa letra
function calcularDnisConLetra(letra) {
    let contador = 0; 
    let listadoDnis = ""; 

    // Recorremos el rango de DNIs especificado
    for (let i = 48357001; i <= 48360000; i++) {
        if (obtenerLetraDni(i) === letra) {
            contador++;
            listadoDnis += `${i}${letra} `;
        }
    }

    // Mostramos el resultado por consola
    console.log(`Número de documentos encontrados con la letra ${letra}: ${contador}`);
    console.log(`Listado de DNIs: ${listadoDnis}`);
}

// Ejemplo de uso
calcularDnisConLetra('H');