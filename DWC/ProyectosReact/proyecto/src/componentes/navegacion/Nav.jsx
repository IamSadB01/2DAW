import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <React.Fragment>
        <nav>
            <ul className="Nav">
                <Link className="li" to="/">Home</Link>
                <Link className="li" to="/Peliculas">Películas</Link>
                <Link className="li" to="/Interpretes">Intérpretes</Link>
                <Link className="li" to="/Galeria">Galería</Link>
                <Link className="li" to="/AcercaDe">Acerca De</Link>
            </ul>
        </nav>
    </React.Fragment>
  )
}

export default Nav