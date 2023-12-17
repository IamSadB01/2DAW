// Función para realizar la solicitud a la API
const obtenerDatos = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
};

// Función para obtener los datos de varios personajes.
const obtenerDatosPersonajes = (personajes) => {
  const promesas = personajes.map((personaje) =>
    obtenerDatos(personaje)
  );
  return Promise.all(promesas);
};

export {
  obtenerDatos,
  obtenerDatosPersonajes,
};
