// Función para generar un número aleatorio entre dos valores.
const generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Función para mostrar los datos en un div.
const mapDatos = (datos, donde) => {
  let cadena = "";
  datos.length
    ? datos.map((v, i, a) => {
        cadena += `<p class="persona"> ${v.first_name} ${v.last_name} </p>`;
      })
    : (cadena = "No se han encontrado datos.");
  donde.innerHTML = cadena;
};

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

// Función para ordenar un array de objetos por una propiedad específica.
const ordenarPorPropiedad = (array, propiedad) => {
  return array.sort((a, b) => (a[propiedad] > b[propiedad] ? 1 : -1)); // Si a[propiedad] es mayor que b[propiedad] devuelve 1, si no -1.
};

// Función para formatear y mostrar el listado en un div.
const mostrarListado = (listado, elementoDestino) => {
  elementoDestino = document.getElementById("contenedor-personas");
  elementoDestino.innerHTML = "";

  // Recorremos el array de resultados y vamos creando un elemento div por cada uno de ellos.
  listado.forEach((personaje) => {
    const personajeFormateado = `${personaje.first_name} ${personaje.last_name} - Email: ${personaje.email}`;
    const elementoLista = document.createElement("li");
    elementoLista.classList.add("persona");
    elementoLista.textContent = personajeFormateado;
    elementoDestino.appendChild(elementoLista);
  });
};

// Función para mostrar los datos en un div.
const mostrarDatos = (data) => {
  let div = document.getElementsByClassName("container")[0];
  let divPersonajes = document.createElement("div");
  divPersonajes.classList.add("personajes");
  div.appendChild(divPersonajes);

  // Recorremos el array de resultados y vamos creando un elemento li por cada uno de ellos.
  for (let i = 0; i < data.results.length; i++) {
    let divPersonaje = document.createElement("div");
    divPersonaje.classList.add("personaje");
    let personaje = data.results[i];

    divPersonaje.innerHTML = `
    <strong>${personaje.name}</strong><br>
    Peso: ${personaje.mass} kg<br>
    Género: ${personaje.gender}<br>
    Color de pelo: ${personaje.hair_color}<br>
    Año de nacimiento: ${personaje.birth_year}<br>
    `;
    divPersonajes.appendChild(divPersonaje);
  }
};

// Función para formatear la fecha en formato europeo.
const formatearFechaEuropea = (fecha) => {
  const fechaFormateada = new Date(fecha);
  const dia = fechaFormateada.getDate();
  const mes = fechaFormateada.getMonth() + 1; // +1 porque los meses empiezan en 0.
  const anio = fechaFormateada.getFullYear();
  return `${dia}/${mes}/${anio}`;
}

// Función para mostrar los datos de una película en un contenedor.
const mostrarDatosPelicula = (pelicula) => {
  const tituloPelicula = document.getElementById("titulo-pelicula");
  const detallesPelicula = document.getElementById("datos-pelicula");

  tituloPelicula.textContent = pelicula.title;

  detallesPelicula.innerHTML = `
    <p class="episodio"><strong>Episodio:</strong> ${pelicula.episode_id}</p>
    <p class="director"><strong>Director:</strong> ${pelicula.director}</p>
    <p class="productor"><strong>Productor:</strong> ${pelicula.producer}</p>
    <p class="fecha"><strong>Fecha de Lanzamiento:</strong> ${formatearFechaEuropea(pelicula.release_date)}</p>
    <p class="sinopsis"><strong>Sinopsis:</strong> ${pelicula.opening_crawl}</p>
  `;
};

// Función para mostrar las películas en la lista.
const mostrarPeliculas = (peliculas, elementoLista) => {
  elementoLista.innerHTML = "";

  // Se recorre el array de resultados y se crea un elemento li por cada uno de ellos.
  peliculas.forEach((pelicula) => {
    const elementoListaPelicula = document.createElement("li");
    elementoListaPelicula.textContent = `${pelicula.episode_id}. ${pelicula.title}`;

    // Agregar un atributo de datos con id único.
    elementoListaPelicula.dataset.episodeId = pelicula.episode_id; // dataset es un objeto que contiene todo los atributos de datos.

    elementoLista.appendChild(elementoListaPelicula);
  });
};

export {
  generarNumeroAleatorio,
  mapDatos,
  obtenerDatos,
  ordenarPorPropiedad,
  mostrarListado,
  mostrarDatos,
  formatearFechaEuropea,
  mostrarDatosPelicula,
  mostrarPeliculas,
};
