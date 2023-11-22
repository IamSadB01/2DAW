import React, { useState, Fragment } from 'react';
import ListaNumeros from './ListaNumeros.jsx';
import './style.css';

const Contenedor = () => {
  // Estado para almacenar la lista de números generados.
  const [numeros, setNumeros] = useState([]);

  // Función para generar un número aleatorio que no esté en la lista actual.
  const generarNumeroAleatorio = () => {
    let nuevoNumero;

    do {
      nuevoNumero = Math.floor(Math.random() * 100) + 1;
    } while (numeros.includes(nuevoNumero));

    return nuevoNumero;
  };

  // Función para generar un nuevo número y agregarlo a la lista.
  const generarNumero = () => {
    const nuevoNumero = generarNumeroAleatorio();
    setNumeros([...numeros, nuevoNumero]);
  };

  // Función para eliminar un elemento de la lista por su índice.
  const eliminarElemento = (index) => {
    const numerosActualizados = [...numeros]; // Creamos una copia del array.
    numerosActualizados.splice(index, 1); // Eliminamos el elemento del array.
    setNumeros(numerosActualizados); // Actualizamos el estado.
  };

  // Función para eliminar todos los números de la lista.
  const eliminarTodos = () => {
    setNumeros([]);
  };

  return (
    <Fragment>
      <ListaNumeros numeros={numeros} eliminarElemento={eliminarElemento} />
      <div className="button-container">
        <button onClick={generarNumero}>Generar</button>
        <button onClick={eliminarTodos}>Eliminar</button>
      </div>
    </Fragment>
  );
};

export default Contenedor;
