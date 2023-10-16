"use strict";

function mostrarInformacion() {
    // Cuenta los párrafos.
    const parrafos = document.getElementsByTagName('p'); // HTMLCollection.
    const numParrafos = parrafos.length;

    // Obtiene el texto del segundo párrafo.
    const textoSegundoParrafo = parrafos[1].innerText; // innerText obtiene el texto visible dentro del segundo párrafo.

    // Cuenta y obtiene enlaces.
    const enlaces = document.getElementsByTagName('a');
    const numEnlaces = enlaces.length;

    const primerEnlace = enlaces[0].href; // href permite obtener el valor del atributo href del enlace <a>.
    const penultimoEnlace = enlaces[numEnlaces - 2].href; // numEnlaces - 2 porque las listas empiezan en 0, por lo tanto numEnlaces - 1 sería el último, y numEnlaces - 2 el penúltimo.

    // Combina la información en un solo string.
    const infoTexto = `
    <strong>Número de párrafos:</strong> ${numParrafos}<br>
    <strong>Texto del segundo párrafo:</strong> ${textoSegundoParrafo}<br>
    <strong>Número de enlaces:</strong> ${numEnlaces}<br>
    <strong>Dirección del primer enlace:</strong> ${primerEnlace}<br>
    <strong>Dirección del penúltimo enlace:</strong> ${penultimoEnlace}<br>
    `;

    // Muestra la información de infoTexto en el div con id 'info'.
    document.getElementById('info').innerHTML = infoTexto;
}

// Llama a la función cuando se carga la página.
window.onload = mostrarInformacion;