import React from "react";
import useFetchData from "../hooks/useFetchData.js";
import usePeliculas from "../hooks/usePeliculas.js";
import PeliculasList from "./PeliculasList.jsx";
import DetallesPelicula from "./DetallesPelicula.jsx";

const EnciclopediaPage = () => {
  const { data: peliculasData, loading: peliculasLoading, error: peliculasError } = useFetchData("https://swapi.dev/api/films/");
  const { peliculas, setPeliculas, peliculaSeleccionada, manejarPeliculaSeleccionada } = usePeliculas();

  React.useEffect(() => {
    if (peliculasData && peliculasData.results) {
      setPeliculas(peliculasData.results);
    }
  }, [peliculasData, setPeliculas]);

  return (
    <div>
      <header>
        <h1>Enciclopedia de <em>Star Wars</em></h1>
      </header>
      <main>
        {peliculasLoading ? (
          <p className="searching">Se están buscando las películas, keep calm and espérate por qué no te queda otra &#128539;</p>
        ) : peliculasError ? (
          <p className="error">Error al cargar las películas, sigue jugando.</p>
        ) : (
          <>
            <PeliculasList peliculas={peliculas} onClickPelicula={manejarPeliculaSeleccionada} />
            <DetallesPelicula datosPelicula={peliculaSeleccionada} />
          </>
        )}
      </main>
    </div>
  );
};

export default EnciclopediaPage;
