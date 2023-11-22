"use strict";

// Función para generar número aleatorio entre 100 y 1000.
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
}
  
// Función para crear checkbox con números aleatorios.
const crearCheckbox = (numero) => {
    const checkboxContainer = document.getElementById('checkbox-container');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');

    checkbox.type = 'checkbox';
    checkbox.value = numero;
    checkbox.name = `checkbox${numero}`; // Atributo name del checkbox para asignarle el correspondiente label.

    label.textContent = numero;
    label.htmlFor = checkbox.name; // Asignamos el valor name del checkbox al atributo for del label.
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(label);
}
  
// Función para marcar todos los números pares.
const marcarTodosPares = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Recorremos todos los checkboxes y marcamos los pares.
    checkboxes.forEach(checkbox => {
        const numero = parseInt(checkbox.value);
        if (numero % 2 === 0) {
          checkbox.checked = true;
        }
    });
}
  
// Función para desmarcar todos los números.
const desmarcarTodos = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}
  
// Función para crear párrafo con texto y estilo.
const crearParrafo = (texto, estilo) => {
    if (!texto.trim() || !estilo) {
      console.error("Error: Debes ingresar texto y seleccionar un estilo.");
      return;
    }
  
    const parrafo = document.createElement('p');
    parrafo.textContent = texto;
    parrafo.classList.add(estilo);
    return parrafo;
}

// Objeto para almacenar discos.
const listaDiscos = [];

// Función para agregar disco.
const agregarDisco = (disco) => {
  listaDiscos.push(disco);
}

// Función para mostrar discos.
const mostrarDiscos = () => {
  return listaDiscos.map(disco => {
    return `Nombre: ${disco.nombre} | Grupo: ${disco.grupo} | Año: ${disco.anio} | Tipo: ${disco.tipo} | Localización: ${disco.localizacion} | Prestado: ${disco.prestado ? 'Sí' : 'No'}`;
  });
}

// Función para limpiar formulario.
const limpiarFormulario = () => {
    const nombreInput = document.getElementById('nombre');
    const grupoInput = document.getElementById('grupo');
    const anioInput = document.getElementById('anio');
    const tipoInput = document.getElementById('tipo');
    const localizacionInput = document.getElementById('localizacion');
    const prestadoInput = document.getElementById('prestado');
  
    nombreInput.value = '';
    grupoInput.value = '';
    anioInput.value = '';
    tipoInput.value = '';
    localizacionInput.value = '';
    prestadoInput.checked = false;
  }

// Función para obtener poblaciones por provincia.
const obtenerPoblacionesPorProvincia = (provincia) => {
  switch (provincia) {
    case 'Alicante':
      return ['Alicante', 'Elche', 'Petrer'];
    case 'Castellon':
      return ['Castellón', 'Oropesa', 'Vinaroz'];
    case 'Valencia':
      return ['Valencia', 'Xàtiva', 'Torrent'];
    default:
      return ['No seleccionado'];
  }
}

// Función para limpiar select.
const limpiarSelect = (selectElement) => {
  selectElement.innerHTML = '';
}

// Función para agregar opción a select.
const agregarOpcion = (selectElement, valor, texto) => {
  const option = document.createElement('option');
  option.value = valor;
  option.textContent = texto;
  selectElement.appendChild(option);
}

// Función para actualizar poblaciones.
const actualizarPoblaciones = (provinciaSelect, poblacionSelect) => {
  const provinciaSeleccionada = provinciaSelect.value;
  limpiarSelect(poblacionSelect);

  const poblaciones = obtenerPoblacionesPorProvincia(provinciaSeleccionada);

  // Agregar opciones al select de poblaciones.
  poblaciones.forEach(poblacion => {
    agregarOpcion(poblacionSelect, poblacion, poblacion);
  });
}

// Función para validar formulario.
const validarFormulario = (provinciaSelect, poblacionSelect, resultadoDiv) => {
  const provinciaSeleccionada = provinciaSelect.value;
  const poblacionSeleccionada = poblacionSelect.value;

  if (provinciaSeleccionada === 'No seleccionado' || poblacionSeleccionada === 'No seleccionado') {
    resultadoDiv.textContent = 'Por favor, selecciona una provincia y una población válida.';
  } else {
    resultadoDiv.textContent = `Formulario enviado con éxito. Provincia: ${provinciaSeleccionada}, Población: ${poblacionSeleccionada}.`;
  }
}

const validarFormularioDiscos = () => {
  const nombreInput = document.getElementById('nombre');
  const grupoInput = document.getElementById('grupo');
  const anioInput = document.getElementById('anio');
  const tipoSelect = document.getElementById('tipo');
  const localizacionInput = document.getElementById('localizacion');

  // Resetear estilos.
  resetearEstilos([nombreInput, grupoInput, anioInput, tipoSelect, localizacionInput]);

  // Validar nombre y grupo.
  validarCampo(nombreInput, 5);
  validarCampo(grupoInput, 5);

  // Validar año.
  validarAnio(anioInput);

  // Validar tipo de música.
  validarTipoMusica(tipoSelect);

  // Validar localización.
  validarLocalizacion(localizacionInput);
}

// Función para resetear estilos.
const resetearEstilos = (elementos) => {
  elementos.forEach(elemento => {
    elemento.classList.remove('error');
    elemento.previousElementSibling.classList.remove('error');
  });
}

// Función para validar campo.
const validarCampo = (input, longitudMinima) => {
  if (input.value.length < longitudMinima) {
    input.classList.add('error');
    input.previousElementSibling.classList.add('error'); // Estilo para la etiqueta.
  }
}

// Función para validar año.
const validarAnio = (input) => {
  const anio = parseInt(input.value, 10);
  if (isNaN(anio) || anio.toString().length !== 4) {
    input.classList.add('error');
    input.previousElementSibling.classList.add('error');
  }
}

// Función para validar tipo de música.
const validarTipoMusica = (select) => {
  if (select.value === '') {
    select.classList.add('error');
    select.previousElementSibling.classList.add('error');
  }
}

// Función para validar localización.
const validarLocalizacion = (input) => {
  const patron = /^ES-\d{3}[A-Z]{2}$/; // ES-123AA
  if (!patron.test(input.value)) {
    input.classList.add('error');
    input.previousElementSibling.classList.add('error');
  }
}

export { generarNumeroAleatorio, crearCheckbox, marcarTodosPares, desmarcarTodos, crearParrafo, agregarDisco, mostrarDiscos, limpiarFormulario, obtenerPoblacionesPorProvincia, limpiarSelect, agregarOpcion, actualizarPoblaciones, validarFormulario, validarFormularioDiscos };