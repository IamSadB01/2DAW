import React from 'react'
import SubNavGaleria from '../navegacion/SubNavGaleria.jsx';
import { Outlet } from 'react-router-dom';
import './GaleriaPage.css';

// Página principal de la galería que incluye una sub-navegación y un espacio para el contenido (Outlet).
const GaleriaPage = () => {
  return (
    <div className="GaleriaPage-container">
      <SubNavGaleria />
      <div className='GaleriaPage'>
        <h1>GaleriaPage</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default GaleriaPage