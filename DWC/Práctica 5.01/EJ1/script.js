import { generarNumeroAleatorio } from "../biblioteca/funciones.js";

const contenedorNumeros = document.getElementById("contenedor-numeros");
const loadingGif = document.getElementById("loading-gif");

function PromesaSimple() {
  // Mostrar el gif de carga.
  loadingGif.classList.remove("oculto");

  // Generar un número aleatorio entre 0 y 100.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generarNumeroAleatorio(0, 100);
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(new Error("El número generado es impar"));
      }
    }, 3000);
  });
}

// Mostrar el número generado o el mensaje de error.
PromesaSimple()
  .then((number) => {
    contenedorNumeros.innerHTML = (`El número generado es ${number}`);
  })
  .catch((error) => {
    contenedorNumeros.innerHTML = (error.message);
  })
  .finally(() => {
    loadingGif.classList.add("oculto");  // Ocultar el gif de carga.
  });
