"use strict";

function toCani(cadenaInicial) {
    let resultado = ""; 
    let upper = true; // Flag para alternar entre MAYÚSCULAS y minúsculas

    for (let i = 0; i < cadenaInicial.length; i++) {
        // Cambiamos 'c' o 'C' por 'k' o 'K'
        if (cadenaInicial[i].toLowerCase() === 'c')
            resultado += upper ? 'K' : 'k';
        else 
            resultado += upper ? cadenaInicial[i].toUpperCase() : cadenaInicial[i].toLowerCase();

        upper = !upper; // Cambiamos el flag para la siguiente iteración
    }

    // Añadimos entre 2 y 5 letras 'H' al final
    const hCount = Math.floor(Math.random() * 4) + 2;

    if (resultado.endsWith("a")) {
        for (let i = 0; i < hCount; i++)
        resultado += 'H';
    }

    return resultado;
}

// Prueba de la función
console.log(toCani("una cadena cani es como esta"));
console.log(toCani("me ha salido de locos"));