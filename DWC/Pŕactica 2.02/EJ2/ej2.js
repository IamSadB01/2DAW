"use strict";

// Funcion para multiplicar los 2 valores (tabla + multiplicador)
function multiplicar(a, b) {
  return a * b;
}

// Funcion para sacar el número de la tabla y los número por los que se tiene que multiplicar
function tablas(numero, fnMultiplicar) {
  for (let numeroTabla = numero; numeroTabla >= 2; numeroTabla--) {
    console.log(`Tabla del ${numeroTabla}:`);
        
    for (let numeroMultiplicador = 1; numeroMultiplicador <= 10; numeroMultiplicador++) {
      console.log(`${numeroTabla} x ${numeroMultiplicador} = ${fnMultiplicar(numeroTabla, numeroMultiplicador)}`);
    }

    console.log('\n');  // Línea vacía para separar las tablas.
  }
}

// Uso de la función:
tablas(5, multiplicar);