import React from 'react'
import SubNavPeliculas from '../navegacion/SubNavPeliculas.jsx';
import { Outlet } from 'react-router-dom';
import './PeliculasPage.css';

// Página principal de las Películas que incluye una sub-navegación y un espacio para el contenido (Outlet).
const PeliculasPage = () => {
  return (
    <div className="PeliculasPage-container">
      <SubNavPeliculas />
      <div className='PeliculasPage'>
        <h1>PeliculasPage</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default PeliculasPage