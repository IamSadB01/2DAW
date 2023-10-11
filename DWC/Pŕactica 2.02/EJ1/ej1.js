"use strict";

function sumarNumeros() {
  // Comprobar si la función tiene al menos dos parámetros
  if (arguments.length < 2) {
    console.error("Por favor, introduce al menos dos números para sumar.");
    return;
  }
    
  let total = 0;

  // Recorrer cada argumento
  for (let posicion = 0; posicion < arguments.length; posicion++) {
    // Comprobar si el argumento actual es un número
    if (typeof arguments[posicion] !== 'number') {
      console.error("Error: Todos los parámetros deben ser números.");
      return;
    }
    total += arguments[posicion];
  }

  console.log(`La suma de los números proporcionados es: ${total}`);
}

// Pruebas
sumarNumeros(1, 2);
sumarNumeros(1, 2, 3, 4, 5);
sumarNumeros(1);
sumarNumeros(1, "Hola");
