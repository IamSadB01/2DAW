import {mapDatos} from "../biblioteca/funciones.js";

const url = "./feos.json";
const contenedorPersonas = document.getElementById("contenedor-personas");

fetch(url)
  .then((respuesta) => {
    console.log("Conexión realizada con éxito.");
    //console.log(respuesta);
    return respuesta.json();
  })
  .then((datos) => {
    console.log("Mostrando los datos...");
    console.log(datos);
    contenedorPersonas.innerHTML = (mapDatos(datos, contenedorPersonas));
  });
