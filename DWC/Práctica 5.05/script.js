import {
  obtenerMapas,
  obtenerMapaPorUuid,
} from "./bibliotecas/obtenerDatosValorant.js";

import {
  crearMapaItem,
  crearMapDetails,
} from "./bibliotecas/manipularDOMValorant.js";

document.addEventListener("DOMContentLoaded", () => {
  const mapsList = document.getElementById("maps-list");
  const mapDetails = document.getElementById("map-details");
  const errorContainer = document.getElementById("error-container"); // Nuevo elemento para mostrar errores.
  let mapas; // Variable global para guardar los mapas.

  // Muestra un mensaje de error.
  const mostrarErrorCustom = (mensaje) => {
    errorContainer.textContent = mensaje;
    errorContainer.classList.remove("ocultar"); // Muestra el contenedor de error.
  };

  // Muestra los mapas.
  const displayMaps = async () => {
    try {
      mapas = await obtenerMapas();

      mapas.forEach((mapa) => {
        const mapItem = crearMapaItem(mapa); // Crea el elemento del mapa.
        mapsList.appendChild(mapItem); // Agrega el elemento del mapa a la lista de mapas.
      });
    } catch (error) {
      mostrarErrorCustom("Error al cargar mapas. Por favor, intenta nuevamente.");
      console.error("Error fetching Valorant maps:", error);
    }
  };

  displayMaps();

  // Muestra los callouts de un mapa.
  const mostrarCallouts = (mapUuid) => {
    const calloutsContainer = document.getElementById(
      `callouts-container-${mapUuid}`
    );
    calloutsContainer.innerHTML = "";

    const mapa = obtenerMapaPorUuid(mapas, mapUuid);

    if (!mapa) {
      mostrarErrorCustom("Mapa no encontrado. Por favor, selecciona otro mapa.");
      return;
    }

    const callouts = mapa.callouts; // Variable para guardar los callouts del mapa.

    // Si el mapa tiene callouts, los muestra. Si no, muestra un mensaje.
    if (callouts && callouts.length > 0) {
      callouts.forEach((callout) => {
        const calloutElement = document.createElement("div");
        calloutElement.classList.add("callout-item");
        calloutElement.innerHTML = `<strong>${callout.regionName}</strong> (${callout.superRegionName}) - X: ${callout.location.x}, Y: ${callout.location.y}`;
        calloutsContainer.appendChild(calloutElement);
      });
    } else {
      calloutsContainer.textContent =
        "No hay callouts disponibles para este mapa.";
    }
  };

  // Muestra los detalles de un mapa al hacer click sobre este.
  const displayMapDetails = (mapa) => {
    mapDetails.innerHTML = crearMapDetails(mapa); // Crea los detalles del mapa con la información de este.

    const calloutsBtn = document.getElementById(`show-callouts-btn-${mapa.uuid}`);
    calloutsBtn.addEventListener("click", () => mostrarCallouts(mapa.uuid)); // Muestra los callouts del mapa al hacer click en el botón.
  };

  // Evento al hacer click en un mapa.
  mapsList.addEventListener("click", (event) => {
    const clickedMapItem = event.target.closest(".map-item"); // Devuelve el elemento más cercano que tenga la clase .map-item.

    if (clickedMapItem) {
      const mapa = mapas.find(
        (map) =>
          map.displayName ===
          clickedMapItem.querySelector(".map-name-overlay").textContent
      ); // Devuelve el mapa que tenga el mismo nombre que el elemento clickeado.
      displayMapDetails(mapa); // Muestra los detalles del mapa.
    }
  });
});
