// Función para formatear la fecha en formato europeo.
const formatearFechaEuropea = (fecha) => {
  const fechaFormateada = new Date(fecha);
  const dia = fechaFormateada.getDate();
  const mes = fechaFormateada.getMonth() + 1; // +1 porque los meses empiezan en 0.
  const anio = fechaFormateada.getFullYear();
  return `${dia}/${mes}/${anio}`;
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

// Función para mostrar los datos de una película en un contenedor.
const mostrarDatosPelicula = (pelicula) => {
  const tituloPelicula = document.getElementById("titulo-pelicula");
  const detallesPelicula = document.getElementById("datos-pelicula");

  tituloPelicula.textContent = pelicula.title;

  detallesPelicula.innerHTML = `
    <p class="episodio"><strong>Episodio:</strong> ${pelicula.episode_id}</p>
    <p class="director"><strong>Director:</strong> ${pelicula.director}</p>
    <p class="productor"><strong>Productor:</strong> ${pelicula.producer}</p>
    <p class="fecha"><strong>Fecha de Lanzamiento:</strong> ${formatearFechaEuropea(
      pelicula.release_date
    )}</p>
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

// Función para mostrar los detalles de un actor en el DOM.
const mostrarDetallesActorEnDOM = (actor) => {
  const detallesActor = document.getElementById("detalles-actor");
  detallesActor.innerHTML = `
  <p><strong>Nombre:</strong> ${actor.name}</p>
  <p><strong>Género:</strong> ${actor.gender}</p>
  <p><strong>Altura:</strong> ${actor.height} cm</p>
  <p><strong>Peso:</strong> ${actor.mass} kg</p>
  <p><strong>Color de pelo:</strong> ${actor.hair_color}</p>
  <p><strong>Color de ojos:</strong> ${actor.eye_color}</p>
  `;
};

// Función para mostrar los actores en el DOM.
const mostrarActoresEnDOM = (personajes) => {
  const contenedorActores = document.getElementById("actores");
  // Limpiar el contenedor antes de agregar nuevos datos.
  contenedorActores.innerHTML = "";

  // Iterar sobre los personajes y mostrar los nombres de los actores.
  personajes.forEach((actor) => {
    const divActor = document.createElement("div");
    divActor.classList.add("actor");
    const nombreActor = document.createElement("h3");
    
    nombreActor.textContent = actor.name;

    divActor.appendChild(nombreActor);
    contenedorActores.appendChild(divActor);

  });
  return personajes; // Devolver el array de personajes para poder usarlo.
};

export {
  formatearFechaEuropea,
  mapDatos,
  mostrarListado,
  mostrarDatos,
  mostrarDatosPelicula,
  mostrarPeliculas,
  mostrarDetallesActorEnDOM,
  mostrarActoresEnDOM,
};