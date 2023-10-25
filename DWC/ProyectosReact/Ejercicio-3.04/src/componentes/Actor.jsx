import React from 'react';
import './Actor.css';
import FotoActor from './FotoActor.jsx';

// Componente que muestra toda la información de un actor (foto, nombre, biografía).
function Actor(props) {
  return (
    <div className="actor">
      <FotoActor src={props.actor.foto} alt={`Foto de ${props.actor.nombre}`} />
      <div className="infoActor">
        <h3 className="nombre">{props.actor.nombre}</h3>
        <p className="biografia">{props.actor.biografia}</p>
      </div>
    </div>
  );
}

export default Actor;