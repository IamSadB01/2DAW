import {
  obtenerDatos,
  ordenarPorPropiedad,
  mostrarListado,
} from "../biblioteca/funciones.js";

window.onload = () => {
  const url = "../assets/feos.json";
  const outputDiv = document.getElementById("contenedor-personas");

  // Obtener datos de la url y mostrarlos en el div.
  obtenerDatos(url)
    .then((data) => {
      const dataOrdenada = ordenarPorPropiedad(data, "first_name");
      mostrarListado(dataOrdenada, outputDiv);
    })
    .catch((error) => console.error(error));
};