"use strict";

window.onload = function () {
  // Función que censura la palabra "sexo".
  function censurarTexto(nodo) {
    if (nodo.nodeType === 3) { // Si es un nodo de texto.
      let texto = nodo.nodeValue;

      // Reemplaza "sexo" por "Contenido Bloqueado" envuelto en un span
      let textoCensurado = texto.replace(/sexo/gi, function (coincidencia) { // /sexo/gi Busca la palabra "sexo" de manera global e insensible a mayúsculas/minúsculas.
        return '<span class="censored">Contenido Bloqueado</span>';
      });
      
      if (texto !== textoCensurado) {
        let divTemporal = document.createElement("div");
        divTemporal.innerHTML = textoCensurado;

        // Reemplaza el nodo original con el nuevo contenido.
        while (divTemporal.firstChild) {
          nodo.parentNode.insertBefore(divTemporal.firstChild, nodo);
        }

        nodo.parentNode.removeChild(nodo);
      }
    } else {
      // Si no es un nodo de texto, continúa con los hijos.
      for (let hijo of nodo.childNodes) {
        censurarTexto(hijo);
      }
    }
  }

  // Recorre el DOM desde la etiqueta <body>.
  censurarTexto(document.body);
};