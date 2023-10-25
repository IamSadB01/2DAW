import React, { useRef } from 'react';
import './Pelicula.css';
import Cartelera from './Cartelera.jsx';
import Resumen from './Resumen.jsx';
import Elenco from './Elenco.jsx'
import Taquilla from './Taquilla';

// Componente que muestra toda la información de una película (título, director, cartelera, resumen, elenco de actores).
function Pelicula(props) {
  const elencoRef = useRef(null);
  const taquillaRef = useRef(null);

  const toggleElenco = () => {
    elencoRef.current.classList.toggle('oculto');
  }

  const toggleTaquilla = () => {
    taquillaRef.current.classList.toggle('oculto');
  }

  return (
     <div className="pelicula">
      <h2>{props.titulo}</h2>
      <p className="director">Director/a: {props.director}</p>
      <Cartelera cartelera={props.cartelera} titulo={props.titulo} />
      <Resumen>{props.resumen}</Resumen>
      
      <div className="botones">
        <button className="primero" onClick={toggleElenco}>Elenco</button>
        <button className="segundo" onClick={toggleTaquilla}>Taquilla</button>
      </div>
      
      <div ref={taquillaRef} className="oculto" id="taquilla"> {/* id para estilo */}
        <Taquilla>{props.taquilla}</Taquilla>
      </div>

      <div ref={elencoRef} className="oculto">
        <Elenco elenco={props.elenco} />
      </div>
    </div>
  );
}

export default Pelicula;