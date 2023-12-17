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

// Función para realizar la petición fetch y devolver los datos como objeto JSON.
const obtenerDatos = (url) => {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Error al obtener los datos. Código: ${response.status}`);
    }
    return response.json();
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
  let div = document.getElementsByClassName("container")[0]; // 
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

export {
  generarNumeroAleatorio,
  mapDatos,
  obtenerDatos,
  ordenarPorPropiedad,
  mostrarListado,
  mostrarDatos,
};
