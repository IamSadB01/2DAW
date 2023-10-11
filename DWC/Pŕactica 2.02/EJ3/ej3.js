"use strict";

// Función que genera un array con 100 números aleatorios entre 1 y 100
function generarArrayAleatorio() {
  let array = [];

  for (let i = 0; i <= 100; i++) {
    array.push(Math.floor(Math.random() * 101));
  }

  return array;
}

// Función que suma los valores contrarios de dos arrays y retorna un nuevo array con los resultados
function sumarArrays(array1, array2) {
  let arraySuma = [];

  for (let i = 0; i < array1.length; i++) {
    arraySuma.push(array1[i] + array2[array2.length - 1 - i]);
  }

  return arraySuma;
}

// Función que imprime en consola los tres arrays
function imprimirArrays(array1, array2, array3) {
  console.log("Primer Array:", array1);
  console.log("Segundo Array:", array2);
  console.log("Array Suma:", array3);
}

// Función principal que recibe tres funciones: una para generar arrays aleatorios, otra para sumar dos arrays y la última para imprimir los arrays
function calcular(fnGenerar, fnSumar, fnImprimir) {
  const array1 = fnGenerar();
  const array2 = fnGenerar();
  const arraySuma = fnSumar(array1, array2);
  fnImprimir(array1, array2, arraySuma);
}

// Uso de la función principal:
calcular(generarArrayAleatorio, sumarArrays, imprimirArrays);