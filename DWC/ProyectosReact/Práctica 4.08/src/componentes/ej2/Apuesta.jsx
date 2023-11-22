import React from 'react';

const Apuesta = ({ apuesta }) => {

  // Combinación ganadora establecida para el juego.
  const combinacionGanadora = {
    numeros: [5, 45, 21, 34, 27],
    estrellas: [6, 12],
  };

  // Filtrar los números de la apuesta que coinciden con la combinación ganadora.
  const aciertosNumeros = apuesta.numeros.filter((numero) => // Devuelve un array con los números que cumplen la condición.
    combinacionGanadora.numeros.includes(numero) // Devuelve true si el número está en la combinación ganadora.
  ).length; // Devuelve el número de elementos del array resultante.

  const aciertosEstrellas = apuesta.estrellas.filter((estrella) =>
    combinacionGanadora.estrellas.includes(estrella)
  ).length;

  // Determinar si la apuesta es premiada (al menos 2 aciertos en números y 1 acierto en estrellas).
  const esPremiado = aciertosNumeros >= 2 && aciertosEstrellas >= 1;

  return (
    <p className={esPremiado ? 'premiado' : 'apuesta'}>
      Apuesta: {JSON.stringify(apuesta)} {/* Mostrar la información de la apuesta en formato JSON */}
    </p>
  );
};

export default Apuesta;