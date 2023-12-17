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

const obtenerDatos = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
  catch (error) {
    console.error("Error en la solicitud:", error);
    throw error; // Propaga el error para que el componente lo maneje.
  }
};

export { obtenerColorAleatorio, obtenerDatos };