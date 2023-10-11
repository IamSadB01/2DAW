import React from 'react';
import './Pelicula.css';
import Cartelera from './Cartelera.jsx';
import Resumen from './Resumen.jsx';
import Elenco from './Elenco.jsx'

// Componente que muestra toda la información de una película (título, director, cartelera, resumen, elenco de actores).
function Pelicula(props) {
  return (
    <div className="pelicula">
      <h2>{props.titulo}</h2>
      <p className="director">Director/a: {props.director}</p>
      <Cartelera cartelera={props.cartelera} titulo={props.titulo} />
      <Resumen>{props.resumen}</Resumen>
      <Elenco elenco={props.elenco} />
    </div>
  );
}

export default Pelicula;