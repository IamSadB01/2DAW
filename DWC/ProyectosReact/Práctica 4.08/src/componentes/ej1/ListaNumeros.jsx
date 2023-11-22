import React from 'react';

// Componente que recibe un array de números y los muestra en una lista.
const ListaNumeros = ({ numeros, eliminarElemento }) => {
  return (
    <ul>
      {numeros.map((numero, index) => (
        <li key={index} onClick={() => eliminarElemento(index)}>
          {numero}
        </li>
      ))}
    </ul>
  );
};

export default ListaNumeros;