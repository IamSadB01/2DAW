import React from 'react';
import './Cartelera.css';

// Componente que muestra una imagen de la cartelera de la película.
function Cartelera(props) {
  return (
    <div className="cartelera">
      <img src={props.cartelera} alt={`Cartel de ${props.titulo}`} />
    </div>
  );
}

export default Cartelera;
