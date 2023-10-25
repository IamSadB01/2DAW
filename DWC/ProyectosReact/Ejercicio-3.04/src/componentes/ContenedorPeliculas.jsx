import React from 'react';
import Pelicula from './Pelicula.jsx';
import peliculas from '../objetos/peliculas.json';

// Componente que muestra cada una de las películas del array infoPelicula.
function ContenedorPeliculas() {
  return (
    <div className="ContenedorPeliculas">
      {peliculas.map((pelicula, index) => (
        <Pelicula 
          key={index}
          titulo={pelicula.titulo}
          director={pelicula.director}
          cartelera={pelicula.cartelera}
          resumen={pelicula.resumen}
          botones={pelicula.botones}
          taquilla={pelicula.taquilla}
          elenco={pelicula.elenco}
        />
      ))}
    </div>
  );
}

export default ContenedorPeliculas