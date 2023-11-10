"use strict";

let dibujando = false; // Indica si se está dibujando o no.
let colorSeleccionado = 'white';

// Inicializa la tabla de dibujo.
const inicializarTablaDibujo = (tabla) => {
    for (let i = 0; i < 100; i++) {
        const fila = document.createElement('tr');
        for (let j = 0; j < 120; j++) {
            const celda = document.createElement('td');
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
}

// Reinicia la tabla de dibujo.
const reiniciarTablaDibujo = (tabla) => {
    const celdas = tabla.querySelectorAll('td');
    celdas.forEach((celda) => {
        celda.removeAttribute('style');
    });
}

// Selecciona el color.
const seleccionarColor = (celda) => {
    const clases = celda.classList; // Obtiene las clases de la celda.
    const colorClass = Array.from(clases).find(cls => cls.startsWith('color-')); // Encuentra la clase que empieza por 'color-'.

    const resetButton = document.getElementById('resetButton');

    if (colorClass) {
        const colorNombre = colorClass.replace('color-', ''); // Obtiene el nombre del color a partir de la clase.
        colorSeleccionado = colorNombre;
        
        // Cambia el texto del color seleccionado.
        const textoColorSeleccionado = document.getElementById('selectedColorText');
        textoColorSeleccionado.textContent = `${colorNombre}`;
        
        // Cambia el color del borde del botón de reiniciar.
        resetButton.style.borderBottom = `3px solid ${colorNombre}`;
    }
}

// Comienza o termina el dibujo.
const comenzarDibujo = () => {
    dibujando = !dibujando;
}

// Dibuja la celda.
const dibujar = (celda) => {
    if (dibujando) {
        celda.style.backgroundColor = colorSeleccionado;
    }
}

// Módulo de exportación.
export { inicializarTablaDibujo };
export { reiniciarTablaDibujo };
export { seleccionarColor };
export { comenzarDibujo };
export { dibujar };
export { dibujando };