import React from 'react';
import './Resumen.css';

// Componente que muestra un resumen de la película pasado por props.children.
function Resumen(props) {
  return (
    <div className="resumen">
      <p>{props.children}</p>
    </div>
  );
}

export default Resumen;
