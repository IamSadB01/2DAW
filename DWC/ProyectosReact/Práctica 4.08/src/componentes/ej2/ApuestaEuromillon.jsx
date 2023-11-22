import React, { useState } from 'react';
import Apuesta from './Apuesta.jsx';
import { generarNumeroAleatorio } from '../biblioteca/biblioteca.js';
import './style.css';

const ApuestaEuromillon = () => {
  const [apuestas, setApuestas] = useState([]);

  const generarApuesta = () => {
    const numerosExcluidos = []; // Lista para almacenar números ya generados en la apuesta.
    const estrellasExcluidas = []; // Lista para almacenar estrellas ya generadas en la apuesta
  
    // Generar números sin repetición.
    const nuevosNumeros = Array.from({ length: 5 }, () => { // Crear un array de 5 elementos.
      const nuevoNumero = generarNumeroAleatorio(1, 50, numerosExcluidos); // Generar un nuevo número aleatorio excluyendo los números ya generados.
      numerosExcluidos.push(nuevoNumero); // Agregar el nuevo número a la lista de excluidos.
  
      return nuevoNumero;
    });
  
    // Generar estrellas sin repetición.
    const nuevasEstrellas = Array.from({ length: 2 }, () => {
      const nuevaEstrella = generarNumeroAleatorio(1, 12, estrellasExcluidas);
      estrellasExcluidas.push(nuevaEstrella);
  
      return nuevaEstrella;
    });
  
    // Crear la nueva apuesta con los números y estrellas generados.
    const nuevaApuesta = {
      numeros: nuevosNumeros,
      estrellas: nuevasEstrellas,
    };
  
    // Agregar la nueva apuesta a la lista de apuestas existentes.
    setApuestas([...apuestas, nuevaApuesta]);
  };
  
  // Eliminar todas las apuestas (idea de Lluch).
  const borrarApuestas = () => {
    setApuestas([]);
  };

  return (
    <div>
      <div className="button-container">
        <button onClick={generarApuesta}>Generar</button>
        <button onClick={borrarApuestas}>Borrar</button>
      </div>

        {apuestas.map((apuesta, index) => ( // Recorrer la lista de apuestas y crear un componente Apuesta por cada una.
          <Apuesta key={index} apuesta={apuesta} />
        ))}
    </div>
  );
};

export default ApuestaEuromillon;