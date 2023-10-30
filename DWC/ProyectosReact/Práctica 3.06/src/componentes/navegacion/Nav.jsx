import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';

// Componente de navegación para el encabezado de la aplicación.
const Nav = () => {
  return (
    <React.Fragment>
      <nav>
        <ul className="Nav">
          <Link className="li" to="/">Home</Link>
          <Link className="li" to="/peliculas">Películas</Link>
          <Link className="li" to="/interpretes">Intérpretes</Link>
          <Link className="li" to="/galeria">Galería</Link>
          <Link className="li" to="/acerca-de">Acerca De</Link>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Nav