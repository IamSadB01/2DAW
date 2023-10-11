"use strict";

// Datos de Marcos
const masaMarcos = 80;
const alturaMarcos = 1.8;

// Datos de Juan
const masaJuan = 70;
const alturaJuan = 1.70;

// Función para calcular el IMC
const calcularIMC = (masa, altura) => {
  return masa / (altura * altura);
};

// Calculando IMC para Marcos y Juan
const imcMarcos = calcularIMC(masaMarcos, alturaMarcos);
const imcJuan = calcularIMC(masaJuan, alturaJuan);

// Comparación de los IMC
const marcosTieneIMCMayor = imcMarcos > imcJuan;

// Resultado final en consola
console.log(`¿Tiene Marcos un IMC mayor que el de Juan?: ${marcosTieneIMCMayor}`);