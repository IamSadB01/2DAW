"use strict";

function agregarNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 1000) + 1; // Número aleatorio entre 1 y 1000.

  const nuevoLi = document.createElement("li"); // Crea un nuevo elemento <li>.
  nuevoLi.innerText = numeroAleatorio; // Establece el texto del <li> al número aleatorio.

  const listaNumeros = document.getElementById("listaNumeros"); // Obtiene el elemento <ul>.
  listaNumeros.appendChild(nuevoLi); // Añade el nuevo <li> al final de la lista.
}