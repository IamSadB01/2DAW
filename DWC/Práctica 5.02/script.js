import {
  obtenerDatos,
  mostrarPeliculas,
  mostrarDatosPelicula,
} from "./biblioteca/funciones.js";

window.onload = () => {
  const listaPeliculas = document.getElementById("lista-peliculas");
  const urlPeliculas = "https://swapi.dev/api/films/";
  const loadingGif = document.getElementById("loading");
  let datosPelicula; // Variable global para guardar los datos de las películas.

  // Cargar lista de películas al cargar la aplicación.
  obtenerDatos(urlPeliculas)
    .then((data) => {
      mostrarPeliculas(data.results, listaPeliculas);
      datosPelicula = data.results; // Guardar los datos en una variable global.
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      loadingGif.classList.add("oculto"); // Ocultar el gif de carga cuando se hayan cargado los datos.
    });;

  // Asignar el evento al contenedor de películas.
  listaPeliculas.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
      const episodeId = event.target.dataset.episodeId; // Obtener el id único desde el atributo de datos.
      
      // Buscar la película seleccionada en el array de datos.
      const peliculaSeleccionada = datosPelicula.find(
        pelicula => pelicula.episode_id === parseInt(episodeId) // al poner el operador === añado el parseInt para que lo compare como número y no como string.
      );

      if (peliculaSeleccionada) {
        mostrarDatosPelicula(peliculaSeleccionada);
      }
    }
  });
};
