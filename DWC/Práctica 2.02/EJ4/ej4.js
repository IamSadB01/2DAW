"use strict";

// Constructor para el tipo "curso"
function curso(nombre, año, descripcion) {
  this.nombre = nombre;
  this.año = año;
  this.descripcion = descripcion;
  this.alumnado = [];
}

// Constructor para el tipo "discente"
function discente(nombre, apellido1) {
  this.nombre = nombre;
  this.apellido1 = apellido1;
}

// Ejemplo de uso
let cursoJS = new curso("JavaScript Básico", 2023, "Curso de JavaScript.");

// Añadiendo estudiantes (discentes) al curso
let alumno1 = new discente("Juan", "García");
let alumno2 = new discente("Maria", "Pérez");

// Añadiendo discentes al curso
cursoJS.alumnado = [...cursoJS.alumnado, alumno1, alumno2];

// Mostrar el objeto cursoJS
console.log(cursoJS);