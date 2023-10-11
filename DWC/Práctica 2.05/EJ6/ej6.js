"use strict";

// Función que verifica si un número es primo
function esPrimo(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Función que verifica si un número es palíndromo
function esPalindromo(num) {
    const str = num.toString();
    return str == str.split('').reverse().join('');
}

// Función principal para calcular números primos y palíndromos hasta 100,000
function primosYpalindromosHastaCienMil() {
    const resultado = [];

    for (let i = 0; i <= 100000; i++) {
        if (esPrimo(i) && esPalindromo(i)) {
            resultado.push(i);
        }
    }

    console.log(`Listado de números que son primos y palíndromos hasta 100,000:`);
    console.log(resultado.join(', '));
}

// Prueba de la función
primosYpalindromosHastaCienMil();