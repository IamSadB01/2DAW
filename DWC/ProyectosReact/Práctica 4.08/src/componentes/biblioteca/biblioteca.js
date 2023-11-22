// Función para generar un número aleatorio entre un mínimo y un máximo excluyendo los números de una lista.
const generarNumeroAleatorio = (min, max, numerosExcluidos) => {
  let numero;
  do {
    numero = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (numerosExcluidos.includes(numero));
  return numero;
};

export { generarNumeroAleatorio };