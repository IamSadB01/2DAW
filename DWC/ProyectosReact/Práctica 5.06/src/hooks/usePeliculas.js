import { useState } from "react";

const usePeliculas = () => {
  const valorInicialPeliculas = [];
  const valorInicialPeliculaSeleccionada = null;
  const [peliculas, setPeliculas] = useState(valorInicialPeliculas);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(valorInicialPeliculaSeleccionada);

  const manejarPeliculaSeleccionada = (episodeId) => {
    const peliculaSeleccionada = peliculas.find(
      (pelicula) => pelicula.episode_id === parseInt(episodeId)
    );

    setPeliculaSeleccionada(peliculaSeleccionada);
  };

  return { peliculas, setPeliculas, peliculaSeleccionada, manejarPeliculaSeleccionada };
};

export default usePeliculas;
