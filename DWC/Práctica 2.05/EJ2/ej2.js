"use strict";

function temporizador(minutos = 0, segundos) {
    // Validaciones
    if (typeof minutos !== 'number' || (segundos !== undefined && typeof segundos !== 'number')) {
        console.log("Por favor, proporciona valores numéricos válidos.");
    }

    if (minutos < 0 || segundos < 0) {
        console.log("¡No se permiten valores negativos!");
        return;
    }

    if (segundos === undefined) {
        segundos = minutos;
        minutos = 0;
    }

    if (segundos > 59) {
        console.log("¡Los segundos no pueden superar el número 59!");
        return;
    }

    if (minutos > 59) {
        console.log("¡Los minutos no pueden superar el número 59!");
        return;
    }

    console.log(`Has inicializado un temporizador de ${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`);

    // Función para formatear el tiempo (poner un 0 al principio del valor si solo es 1)
    const formatTime = (min, seg) => {
        return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
    };

    // Intervalo de tiempo que se ejecuta cada segundo (1000 ms)
    const intervalo = setInterval(() => {
        console.log(formatTime(minutos, segundos));

        if (segundos === 0 && minutos === 0) {
            clearInterval(intervalo);
            console.log("¡Tiempo terminado!");
            return;
        }

        if (segundos === 0) {
            minutos--;
            segundos = 59;
        } else {
            segundos--;
        }
    }, 1000);
}

// Prueba
    temporizador(1,0);