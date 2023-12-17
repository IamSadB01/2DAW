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

// Función para realizar la solicitud a la API (async/await)
const obtenerDatosAsync = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

// Función para obtener los datos de varios personajes.
const obtenerDatosPersonajes = async (personajes) => {
  const promesas = personajes.map((personaje) =>
    obtenerDatos(personaje)
  );
  return Promise.all(promesas);
};

// Función para obtener los datos de varias naves o vehículos.
const obtenerDatosNavesVehiculos = async (urls) => {
  const promesas = urls.map((url) => obtenerDatosAsync(url));
  return Promise.all(promesas);
};

export {
  obtenerDatos,
  obtenerDatosAsync,
  obtenerDatosPersonajes,
  obtenerDatosNavesVehiculos,
};
