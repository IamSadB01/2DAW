import { mostrarDatos } from "../biblioteca/funciones.js";

// Función para obtener los datos de los personajes
window.onload = () => {
  fetch("https://swapi.dev/api/people/?page=2").then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    mostrarDatos(data);
  }).catch((error) => console.error("Error fetching data:", error));;
};

