"use strict";

// Definición del objeto discente (estudiante)
const discente = {
  id: 1,
  nombre: "Juan",
  apellidos: "Pérez García",
  aficiones: ["leer", "correr", "cocinar"],
  notas: {
    primera: 4,
    segunda: 5,
    tercera: 5
  },

  // Método para calcular la media de las notas del estudiante
  calcularMedia: function() {
    return (this.notas.primera + this.notas.segunda + this.notas.tercera) / 3;
  },

  // Método para imprimir en consola las aficiones del estudiante
  imprimirAficiones: function() {
    console.log("Aficiones de " + this.nombre + ":");
    this.aficiones.forEach(aficion => {
      console.log("- " + aficion);
    });
  },

  // Método para imprimir un informe detallado del estudiante
  imprimirInforme: function() {
    console.log(`Informe de ${this.nombre} ${this.apellidos}`);
    console.log(`ID: ${this.id}`);
    console.log("Evaluaciones:");
    console.log(`\t1ª Evaluación: ${this.notas.primera}`);
    console.log(`\t2ª Evaluación: ${this.notas.segunda}`);
    console.log(`\t3ª Evaluación: ${this.notas.tercera}`);
    console.log(`Nota Media: ${this.calcularMedia().toFixed(2)}`);
    console.log("Aficiones:");
    this.aficiones.forEach(aficion => {
      console.log("\t- " + aficion);
    });
  }
}

// Pruebas
discente.imprimirAficiones();
discente.imprimirInforme();