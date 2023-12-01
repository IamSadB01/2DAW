import React, { useState, useEffect } from 'react';
import { obtenerColorAleatorio } from '../../biblioteca/funciones.js';
import './Colores.css';

const Colores = () => {
  const valorInicial = '#333333';
  const [colorFondo, setColorFondo] = useState(valorInicial);

  // Efecto para cambiar el color de fondo del body.
  useEffect(() => {
    document.body.style.backgroundColor = colorFondo;

    return () => {
      document.body.style.backgroundColor = valorInicial;
    }
  }, [colorFondo]);

  // Función que obtiene un color aleatorio y lo asigna al estado.
  const cambiarColorFondo = () => {
    const nuevoColor = obtenerColorAleatorio();
    setColorFondo(nuevoColor);
  };

  return (
    <div className='main-container'>
      <h1>Colorines en React</h1>
      <button className='onChangeColor' onClick={cambiarColorFondo}>Cambiar Color</button>
    </div>
  );
};

export default Colores;