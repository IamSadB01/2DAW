import React from 'react';
import { Link } from 'react-router-dom';
import './SubNavGaleria.css';

// Sub-navegación para la sección de Galería, permite filtrar por Título, Intérprete o Director (aún sin funcionalidad).
const SubNavGaleria = () => {
  return (
    <div className='SubNav'>
      <Link to="portitulo" className='li'>Título</Link>
      <Link to="porinterprete" className='li'>Intérprete</Link>
      <Link to="pordirector" className='li'>Director</Link>
    </div>
  );
}

export default SubNavGaleria;
