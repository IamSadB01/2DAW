import React from 'react';
import "../componentes/Taquilla.css";

const Taquilla = (props) => {
  return (
    <div className='taquilla'>
        <p>Taquilla: {props.children}</p>
    </div>
  )
}

export default Taquilla