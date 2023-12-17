import React from "react";
import Pelicula from "./Pelicula.jsx";

const PeliculasList = ({ peliculas, onClickPelicula }) => {
  return (
    <section id="peliculas">
      {peliculas && peliculas.length > 0 ? (
        <ul id="lista-peliculas">
          {peliculas.map((pelicula) => (
            <Pelicula
              key={pelicula.episode_id}
              pelicula={pelicula}
              onClickPelicula={onClickPelicula}
            />
          ))}
        </ul>
      ) : (
        <p>No se han encontrado peliculas por el momento.</p>
      )}
    </section>
  );
};

export default PeliculasList;
