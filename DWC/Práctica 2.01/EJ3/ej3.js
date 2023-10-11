"use strict";

// Función que imprime un número dado y lo multiplica por 2 en cada iteración.
const imprimirMultiplicado = (veces, numero) => {
  for (let i = 0; i < veces; i++) {
      console.log(numero);
      numero *= 2;
  }
};

// Llamada de ejemplo
imprimirMultiplicado(4, 6); // Salida: 6 12 24 48