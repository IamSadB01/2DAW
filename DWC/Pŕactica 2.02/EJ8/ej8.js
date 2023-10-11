"use strict";

// Imprime de forma recursiva las propiedades y valores de un objeto, identificando números, cadenas, arrays y sub-objetos.
function imprimirObjeto(obj) {
  for (let propiedad in obj) {
    // Si es un número o una cadena
    if (typeof obj[propiedad] === 'number' || typeof obj[propiedad] === 'string') {
      console.log(`${propiedad} → ${obj[propiedad]} → ${typeof obj[propiedad]}`);
    }
    // Si es un objeto
    else if (typeof obj[propiedad] === 'object') {
      // Si es un array
      if (Array.isArray(obj[propiedad])) {
        console.log(`${propiedad} → [${obj[propiedad].join(', ')}] → array`);
      }
      // Si es un objeto pero no es un array
      else {
        let subObj = obj[propiedad];
        console.log(`${propiedad} → {`);
        imprimirObjeto(subObj);  // Llamada recursiva para objetos anidados
        console.log(`} → object`);
      }
    }
  }
}

// Objeto para probar la funcion imprimirObjeto con todas sus variantes (números, cadenas, arrays y sub-objetos)
const testObj = {
  nombre: "Juan",
  edad: 25,
  aficiones: ["leer", "correr", "cocinar"],
  direccion: {
    calle: "Calle Falsa",
    numero: 123
  },

  saludo: function() {
    return "Hola!";
  }
};

// Prueba de la función
imprimirObjeto(testObj);