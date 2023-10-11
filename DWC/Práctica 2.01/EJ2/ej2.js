"use strict";

// Función para calcular la puntuación media
const mediaPuntuacion = (puntos) => {
    let total = puntos.reduce((acumulador, valorActual) => acumulador + valorActual, 0); // La función reduce() suma todas las puntuaciones del array
    return total / puntos.length;
};

// Función para mostrar el equipo con la mejor puntuación media
const mostrarGanador = (...equipos) => { // Aunque sabemos por el enunciado que se quieren añadir 3 equipos en total, con el iterador '...' podemos añadir los que queramos sin problema
  
// Ordenamos los equipos por su puntuación media descendente
equipos.sort((a, b) => mediaPuntuacion(b.puntos) - mediaPuntuacion(a.puntos));

const mejorPuntuacion = mediaPuntuacion(equipos[0].puntos); // Se selecciona la primera posición del array ya que es la que más puntos tiene después de la ordenación

// Filtramos todos los equipos que tengan esa mejor puntuación
const mejoresEquipos = equipos.filter(equipo => mediaPuntuacion(equipo.puntos) === mejorPuntuacion);

// Mostramos el resultado dependiendo de si hay empate o no
mejoresEquipos.length > 1 
    ? console.log(`Hay un empate entre los equipos: ${mejoresEquipos.map(e => e.nombre).join(", ")} con una puntuación media de ${mejorPuntuacion} puntos.`)
    : console.log(`${mejoresEquipos[0].nombre} tiene la mejor puntuación media con ${mejorPuntuacion} puntos.`);
};

// Definición de los equipos y sus puntuaciones
let juan = { nombre: 'Juan', puntos: [89, 120, 103] };
let miguel = { nombre: 'Miguel', puntos: [116, 94, 123] };

// Mostrar el ganador entre Juan y Miguel
mostrarGanador(juan, miguel);

// Cambiar las puntuaciones de Juan y Miguel para provocar un empate
juan.puntos = [100, 100, 100];
miguel.puntos = [100, 100, 100];

// Mostrar nuevamente el "ganador" con las puntuaciones cambiadas (empate)
mostrarGanador(juan, miguel);

// Introducir a María y sus puntuaciones
let maria = { nombre: 'María', puntos: [97, 134, 105] };

// Mostrar el ganador entre Juan, Miguel y María
mostrarGanador(juan, miguel, maria);

// Prueba del operador '...' añadiendo otro equipo
  // Introducir a Jose y sus puntuaciones
  let jose = { nombre: 'Jose', puntos: [200, 200, 200] };

  // Mostrar el ganador entre Juan, Miguel, María y Jose
  mostrarGanador(juan, miguel, maria, jose);