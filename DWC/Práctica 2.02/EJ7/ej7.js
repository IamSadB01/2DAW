"use strict";

// Constructor para el tipo "curso"
function curso(nombre, año, descripcion) {
  this.nombre = nombre;
  this.año = año;
  this.descripcion = descripcion;
  this.alumnado = [];

  // Método matricular
  this.matricular = function(discente) {
    this.alumnado = [...this.alumnado, discente];
  }
}
  
// Constructor para el tipo "discente"
function discente(nombre, apellido1) {
  this.nombre = nombre;
  this.apellido1 = apellido1;
}

// Función para imprimir un informe completo del objeto curso
function informeCompleto(curso) {
  console.log("----- Informe del Curso -----");

  for (let propiedad in curso) {
    if (propiedad === "alumnado") {
      console.log("Alumnado:");
    
      for (let i = 0; i < curso.alumnado.length; i++) {
        console.log(`- ${curso.alumnado[i].nombre} ${curso.alumnado[i].apellido1}`);
      }
    } else {
        console.log(`${propiedad}: ${curso[propiedad]}`);
    }
  }
  
  console.log("-----------------------------");
}

// Ejemplo de uso:
let cursoJS = new curso("JavaScript Básico", 2023, "Curso de JavaScript.");
let alumno1 = new discente("Juan", "García");
let alumno2 = new discente("Maria", "Pérez");

// Usamos el método matricular en lugar de push directo
cursoJS.matricular(alumno1);
cursoJS.matricular(alumno2);

// Mostrar el informe del objeto cursoJS
informeCompleto(cursoJS);