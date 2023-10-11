import React from 'react';
import './FotoActor.css';

// Componente que muestra una foto de cada actor.
function FotoActor(props) {
  return (
    <div className="fotoActor">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default FotoActor;
