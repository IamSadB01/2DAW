"use strict";

// Función toCani.
function toCani(cadena) {
  let cadenaCani = "";
  // Se convierte la cadena a minúsculas.
  cadena = cadena.toLowerCase();
  for (let i = 0; i < cadena.length; i++) {
    if (i % 2 == 0) {
      //Los carácteres de las posiciones pares se convierten a mayúsculas.
      cadenaCani = cadenaCani.concat(cadena.charAt(i).toUpperCase());
    } else {
      // Los carácteres de las posiciones impares se dejan intactos.
      cadenaCani = cadenaCani.concat(cadena.charAt(i));
    }
  }
  // Se cambian todas las c por k y las C por K.
  cadenaCani = cadenaCani.replaceAll("c", "k");
  cadenaCani = cadenaCani.replaceAll("C", "K");
  // Se añade las haches al final de la cadena.
  return cadenaCani.concat("HHH");
}

// Función para añadir una fila.
function anadirFila() {
    const tabla = document.getElementById("bodyTabla");
    const contenido = document.getElementById("texto").value;

    const nuevaFila = document.createElement("tr");
    const nuevaCeldaTexto = document.createElement("td");
    const nuevaCeldaBoton = document.createElement("td");
    const nuevoBoton = document.createElement("button");

    nuevaCeldaTexto.innerText = contenido;
    nuevoBoton.innerText = "Caniar";

    // Asigna un controlador de eventos al nuevo botón. Cuando se haga clic en él, se actualizará el contenido de la celda asociada con el estilo cani.
    nuevoBoton.addEventListener("click", function() {
        nuevaCeldaTexto.innerText = toCani(nuevaCeldaTexto.innerText);
    });

    nuevaCeldaBoton.appendChild(nuevoBoton);
    nuevaFila.appendChild(nuevaCeldaTexto);
    nuevaFila.appendChild(nuevaCeldaBoton);
    tabla.appendChild(nuevaFila);
}

// Evento para el botón "Añadir fila".
document.getElementById("btnAnadir").addEventListener("click", anadirFila);