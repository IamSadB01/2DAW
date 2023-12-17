import {
  obtenerDatosAsync,
  obtenerDatosPersonajes,
  obtenerDatosNavesVehiculos,
} from "./bibliotecas/obtenerDatos.js";

import {
  mostrarPeliculas,
  mostrarDatosPelicula,
  mostrarActoresEnDOM,
  mostrarDetallesActorEnDOM,
  mostrarDetallesNaveVehiculo,
  mostrarBotonPilota,
} from "./bibliotecas/manipularDOM.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedorActores = document.getElementById("actores");
  const contenedorDetalles = document.getElementById("detalles-actor");
  const contenedorDetallesVehiculos = document.getElementById("detalles-nave-vehiculos");
  const contenedorTitulo = document.getElementById("titulo-pelicula");
  const contenedorInfo = document.getElementById("datos-pelicula");

  const listaPeliculas = document.getElementById("lista-peliculas");
  const urlPeliculas = "https://swapi.dev/api/films/";
  const loadingGif = document.getElementById("loading");

  let datosPelicula; // Variable global para guardar los datos de las películas.
  let personajesMostrados; // Variable global para guardar los personajes mostrados.
  const valorInicial = "";

  // Función para cargar los datos de las películas.
  const cargarDatos = async () => {
    try {
      const data = await obtenerDatosAsync(urlPeliculas);
      mostrarPeliculas(data.results, listaPeliculas);
      datosPelicula = data.results; // Guardar los datos en una variable global.
    } catch (error) {
      console.log(error);
    } finally {
      loadingGif.classList.add("oculto"); // Ocultar el gif de carga cuando se hayan cargado los datos.
    }
  };

  cargarDatos();

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

        const cargarPersonajes = async () => {
        try {
          const personajesPelicula = await obtenerDatosPersonajes(primerosDiezPersonajes);
          mostrarDatosPelicula(peliculaSeleccionada);
          personajesMostrados = mostrarActoresEnDOM(personajesPelicula);

          // Agregar botón "Pilota" para cada personaje.
          personajesMostrados.forEach((personaje) => {
            const contenedorBotones = document.createElement("div");
            contenedorBotones.classList.add("botones");
            mostrarBotonPilota(personaje, contenedorBotones, contenedorDetallesVehiculos);
            personaje.elementoDOM.appendChild(contenedorBotones);
          });
        } catch (error) {
          console.error("Error obteniendo datos de personajes:", error);
        } finally {
          loadingGif.classList.add("oculto");
        }};

        cargarPersonajes();
      }
    }
  });

  // Mostrar los detalles de un actor al hacer clic en su nombre.
  contenedorActores.addEventListener("click", async (event) => {
    if (event.target.tagName === "H3") {
      const actorName = event.target.textContent;
      const actor = personajesMostrados.find((actor) => actor.name === actorName);
      if (actor) {
        mostrarDetallesActorEnDOM(actor);
      }

      // Lógica para obtener y mostrar detalles de naves y vehículos.
      const navesVehiculosUrls = actor.starships.concat(actor.vehicles); // Concatenar los arrays de naves y vehículos.
      if (navesVehiculosUrls.length > 0) { // Si hay datos, mostrarlos.
        try {
          const navesVehiculosData = await obtenerDatosNavesVehiculos(navesVehiculosUrls); // Obtener datos de naves y vehículos.
          mostrarDetallesNaveVehiculo(navesVehiculosData, contenedorDetallesVehiculos); // Mostrar datos de naves y vehículos.
        } catch (error) {
          console.error("Error obteniendo datos de naves y vehículos:", error);
        }
      }
    }
  });
});
