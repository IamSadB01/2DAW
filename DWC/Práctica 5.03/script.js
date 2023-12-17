import {
  obtenerDatos,
  obtenerDatosPersonajes,
} from "./bibliotecas/obtenerDatos.js";

import {
  mostrarPeliculas,
  mostrarDatosPelicula,
  mostrarActoresEnDOM,
  mostrarDetallesActorEnDOM,
} from "./bibliotecas/manipularDOM.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedorActores = document.getElementById("actores");
  const contenedorDetalles = document.getElementById("detalles-actor");
  const contenedorTitulo = document.getElementById("titulo-pelicula");
  const contenedorInfo = document.getElementById("datos-pelicula");

  const listaPeliculas = document.getElementById("lista-peliculas");
  const urlPeliculas = "https://swapi.dev/api/films/";
  const loadingGif = document.getElementById("loading");
  
  let datosPelicula; // Variable global para guardar los datos de las películas.
  let personajesMostrados; // Variable global para guardar los personajes mostrados.
  const valorInicial = ""; 

  // Cargar lista de películas al cargar la aplicación.
  obtenerDatos(urlPeliculas)
    .then((data) => {
      mostrarPeliculas(data.results, listaPeliculas);
      datosPelicula = data.results; // Guardar los datos en una variable global.
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loadingGif.classList.add("oculto"); // Ocultar el gif de carga cuando se hayan cargado los datos.
    });

  listaPeliculas.addEventListener("click", (event) => {
    // Reset
    loadingGif.classList.remove("oculto");
    contenedorActores.innerHTML = valorInicial;
    contenedorDetalles.innerHTML = valorInicial;
    contenedorTitulo.innerHTML = valorInicial;
    contenedorInfo.innerHTML = valorInicial;

    // Mostrar la película seleccionada y 10 de sus actores.
    if (event.target.tagName === "LI") {
      const episodeId = event.target.dataset.episodeId;
      const peliculaSeleccionada = datosPelicula.find(
        (pelicula) => pelicula.episode_id === parseInt(episodeId)
      );
  
      if (peliculaSeleccionada) {
        const primerosDiezPersonajes = peliculaSeleccionada.characters.slice(0,10);
  
        obtenerDatosPersonajes(primerosDiezPersonajes)
          .then((personajesPelicula) => {
            mostrarDatosPelicula(peliculaSeleccionada);
            personajesMostrados = mostrarActoresEnDOM(personajesPelicula);
          })
          .catch((error) => {
            console.error("Error obteniendo datos de personajes:", error);
          })
          .finally(() => {
            loadingGif.classList.add("oculto"); // Ocultar el gif de carga cuando se hayan cargado los datos.
          });
      }
    }
  });

  // Mostrar los detalles de un actor al hacer clic en su nombre.
  contenedorActores.addEventListener("click", (event) => {
    if (event.target.tagName === "H3") {
      const actorName = event.target.textContent;
      const actor = personajesMostrados.find((actor) => actor.name === actorName);
      if (actor) {
        mostrarDetallesActorEnDOM(actor);
      }
    }
  });
});
