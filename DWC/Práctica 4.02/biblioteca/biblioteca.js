"use strict";

// Función para generar números aleatorios y mezclar las imágenes en cada "partida" (by ChatGPT).
const generarNumerosAleatorios = () => {
    // Definir una lista de números disponibles del 1 al 9.
    const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const numerosAleatorios = [];

    // Mezclar los números aleatoriamente y almacenarlos en un nuevo array.
    for (let i = 0; i < 9; i++) {
        const indiceAleatorio = Math.floor(Math.random() * numerosDisponibles.length);
        const numeroAleatorio = numerosDisponibles.splice(indiceAleatorio, 1)[0];
        numerosAleatorios.push(numeroAleatorio);
    }

    return numerosAleatorios;
};

// Función para colocar las imágenes en el contenedor.
const colocarImagenes = () => {
    let contenedorImagenes = document.getElementById("contenedorImagenes");
    let arrayNumAleatorios = generarNumerosAleatorios();

    // Agregar imágenes al contenedor según el orden aleatorio.
    for (let i = 0; i < 9; i++) {
        contenedorImagenes.innerHTML += `<img id="imagen${arrayNumAleatorios[i]}" class="imagen" src="./img/${arrayNumAleatorios[i]}.png" alt="Foto${arrayNumAleatorios[i]}" draggable="true">`;
    }
};

// Función para validar si el puzzle se ha resuelto.
const validarPuzzle = () => {
    let contenedorPuzzle = document.getElementsByTagName("img");
    let validacion = true;

    // Verificar si todas las imágenes tienen la clase "validado".
    for (let i = 0; i < contenedorPuzzle.length; i++) {
        if (!contenedorPuzzle[i].classList.contains("validado")) {
            validacion = false;
            break;
        }
    }

    // Mostrar un mensaje de victoria y un botón para reiniciar el juego.
    if (validacion) {
        document.getElementById("win").classList.remove("oculto");
        document.getElementById("reiniciar").addEventListener(
            "click",
            () => {
                location.reload();
            },
            false
        );
    } else {
        // Ocultar el mensaje de victoria si no se ha completado el puzzle.
        if (!document.getElementById("win").classList.contains("oculto")) {
            document.getElementById("win").classList.add("oculto");
        }
    }
};

export { colocarImagenes, validarPuzzle };