"use strict";

// Función que devuelve un color aleatorio en formato hexadecimal
const obtenerColorAleatorio = () => {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
};

export { obtenerColorAleatorio };