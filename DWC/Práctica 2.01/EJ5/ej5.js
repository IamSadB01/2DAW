"use strict";

// Calcular la propina que le corresponde a la factura
const calcularPropina = (factura) => {
  if (factura < 50) {
      return factura * 0.20; // 20% de propina
  }
  else if (factura >= 50 && factura <= 200) {
    return factura * 0.15; // 15% de propina
  }
  else {
    return factura * 0.10; // 10% de propina
  }
};

// Arrays individuales para facturas, propinas y el total a pagar de todas las facturas
const facturas = [124, 48, 268];
const propinas = facturas.map(factura => calcularPropina(factura)); // Utilizo map para procesar cada valor de facturas uno por uno.
const totales = facturas.map((factura, index) => factura + propinas[index]); // Utilizo map con el index de ese valor en el array para acceder al valor correspondiente en propinas y sumarlo al total de la factura

console.log("Facturas: ", facturas);
console.log("Propinas: ", propinas);
console.log("Totales (factura + propina): ", totales);