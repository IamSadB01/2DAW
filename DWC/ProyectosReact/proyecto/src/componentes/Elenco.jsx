import React from 'react';
import './Elenco.css';
import Actor from './Actor.jsx';

// Componente que muestra cada uno de los actores de cada película.
function Elenco(props) {
  return (
    <div className="elenco">
      {props.elenco.map((actor, index) => (
        <Actor key={index} actor={actor} />
      ))}
    </div>
  );
}

export default Elenco;
