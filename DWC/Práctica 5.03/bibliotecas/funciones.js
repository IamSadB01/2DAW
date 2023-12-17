// Función para generar un número aleatorio entre dos valores.
const generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Función para ordenar un array de objetos por una propiedad específica.
const ordenarPorPropiedad = (array, propiedad) => {
  return array.sort((a, b) => (a[propiedad] > b[propiedad] ? 1 : -1)); // Si a[propiedad] es mayor que b[propiedad] devuelve 1, si no -1.
};

export {
  generarNumeroAleatorio,
  ordenarPorPropiedad,
};
