"use strict";

// Función que muestra la fecha y hora actuales formateadas en castellano
function mostrarFecha() {
    const opciones = {
        weekday: 'long',  // día de la semana
        year: 'numeric',  // año
        month: 'long',    // mes
        day: 'numeric',   // día
        hour: '2-digit',  // hora
        minute: '2-digit', // minuto
        second: '2-digit'  // segundo
    };

    const fechaActual = new Date(); // Obtiene la fecha y hora actuales
    const fechaFormateada = new Intl.DateTimeFormat('es-ES', opciones).format(fechaActual); // Formatea la fecha y hora en castellano
    
    console.log(fechaFormateada);
}

setTimeout(mostrarFecha, 3000); // Espera tres segundos y luego muestra la fecha