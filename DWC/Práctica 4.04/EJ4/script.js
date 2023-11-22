"use strict";

import { actualizarPoblaciones, validarFormulario } from "../biblioteca/biblioteca.js";

window.onload = () => {
  const provinciaSelect = document.getElementById("provincia");
  const poblacionSelect = document.getElementById("poblacion");
  const resultadoDiv = document.getElementById("resultado");
  const enviarButton = document.getElementById("enviarButton");

  // Evento change del select de provincias.
  provinciaSelect.addEventListener("change", () => {
    actualizarPoblaciones(provinciaSelect, poblacionSelect);
  });

  // Evento submit del formulario.
  enviarButton.addEventListener("click", () => {
    validarFormulario(provinciaSelect, poblacionSelect, resultadoDiv);
  });

  actualizarPoblaciones(provinciaSelect, poblacionSelect);
};
