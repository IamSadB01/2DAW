// Obtiene los datos de la API de Valorant.
const obtenerMapas = async () => {
  try {
    const response = await fetch("https://valorant-api.com/v1/maps");
    const data = await response.json(); // Para comprobar el mensaje de error eliminar/comentar este await.
    return data.data;
  } catch (error) {
    console.error("Error fetching Valorant maps:", error);
  }
};

// Función para obtener un mapa por su UUID.
const obtenerMapaPorUuid = (mapas, uuid) =>
  mapas.find((mapa) => mapa.uuid === uuid) || null;

export { obtenerMapas, obtenerMapaPorUuid };
