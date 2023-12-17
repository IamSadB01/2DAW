// Función que crea el elemento de un mapa y todos sus contenedores.
const crearMapaItem = (mapa) => {
  const mapItem = document.createElement("div");
  mapItem.classList.add("map-item");

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map-preview-container");

  const mapImage = document.createElement("img");
  mapImage.classList.add("map-preview");
  mapImage.src = mapa.splash; // Imagen de la vista previa del mapa.
  mapImage.alt = `${mapa.displayName} Preview`; // Texto alternativo de la imagen.

  const mapNameOverlay = document.createElement("div");
  mapNameOverlay.classList.add("map-name-overlay");
  mapNameOverlay.textContent = mapa.displayName; // Nombre del mapa.

  mapContainer.appendChild(mapImage);
  mapContainer.appendChild(mapNameOverlay);
  mapItem.appendChild(mapContainer);

  return mapItem;
};

// Función que crea los detalles de un mapa.
const crearMapDetails = (mapa) => `
  <div class="map-details-container">
    <img src="${mapa.displayIcon}" alt="${mapa.displayName} Preview" class="map-preview-display" id="map-preview-${mapa.uuid}">
    <div class="map-info">
      <h2>${mapa.displayName}</h2>
      <p>${mapa.narrativeDescription}</p>
      <button id="show-callouts-btn-${mapa.uuid}" class="callouts-btn">Mostrar Callouts</button>
    </div>
  </div>
  <div class="callouts-container" id="callouts-container-${mapa.uuid}"></div>
`;

export { crearMapaItem, crearMapDetails };