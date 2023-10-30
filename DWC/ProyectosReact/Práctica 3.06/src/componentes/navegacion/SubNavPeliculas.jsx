import React from 'react';
import { Link } from 'react-router-dom';
import './SubNavPeliculas.css';

// Sub-navegación para la sección de Películas, permite filtrar por Título, Intérprete o Director (aún sin funcionalidad).
const SubNavPeliculas = () => {
  return (
    <div className='SubNav'>
      <Link to="portitulo" className='li'>Título</Link>
      <Link to="porinterprete" className='li'>Intérprete</Link>
      <Link to="pordirector" className='li'>Director</Link>
    </div>
  );
}

export default SubNavPeliculas;
