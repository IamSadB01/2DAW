"use strict";

const calcularPrecioConImpuesto = (nombre = "Producto genérico", precio = 100, impuesto = 21) => {
  
  // Verificar si los números son válidos
  isNaN(precio) || isNaN(impuesto) // isNaN() devuelve true si el argumento no es un número.
    ? console.log("Error: Los valores de precio e impuesto deben ser números válidos.")
    : console.log(`El ${nombre} tiene un precio final de ${precio + (precio * impuesto / 100)}€ con impuestos.`);
};

// Ejemplos de uso
calcularPrecioConImpuesto(); // Producto genérico
calcularPrecioConImpuesto("Zapatillas", 80, 10); // Nuevos valores
calcularPrecioConImpuesto("Camiseta", "treinta", 5); // Error

/*

Otra forma de verificar si los números son válidos (preguntar cual es más clean y legible)

if (isNaN(precio) || isNaN(impuesto)) {
    console.log("Error: Los valores de precio e impuesto deben ser números válidos.");
    return;
}

const precioFinal = precio + (precio * impuesto / 100);
console.log(`El ${nombre} tiene un precio final de ${precioFinal}€ con impuestos.`);

*/