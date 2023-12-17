import React from "react";

const DetallesPelicula = ({ datosPelicula }) => {
  return (
    <section id="info">
      <section id="titulo">
        <h2 id="titulo-pelicula">
          {datosPelicula && datosPelicula.title}
        </h2>
      </section>
      <section id="datos-pelicula">
        {datosPelicula && (
          <>
            <p className="episodio"><strong>Episodio:</strong> {datosPelicula.episode_id}</p>
            <p className="director"><strong>Director:</strong> {datosPelicula.director}</p>
            <p className="productor"><strong>Productor:</strong> {datosPelicula.producer}</p>
            <p className="fecha"><strong>Fecha de Lanzamiento:</strong> {datosPelicula.release_date}</p>
            <p className="sinopsis"><strong>Sinopsis:</strong> {datosPelicula.opening_crawl}</p>
          </>
        )}
      </section>
    </section>
  );
};

export default DetallesPelicula;
