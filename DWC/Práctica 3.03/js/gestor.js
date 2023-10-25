"use strict";

// Genera un UUID para identificar las tareas.
const generateUUID = () => {
    var d = new Date().getTime();
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
};

const doc = window.document;

// Añade una tarea con el contenido del textarea.
function agregarTarea() {
    const areaTexto = doc.querySelector("textarea");
    const placeholderVacio = areaTexto.placeholder = ""; // Resetea el placeholder del textarea para evitar mensajes persistentes tras añadir una tarea (sin esto el placeholder se quedaria permanente una vez aparezca).

    // Verifica si el textarea está vacío para advertir al usuario.
    if (areaTexto.value.trim() === "") {
        areaTexto.placeholder = "No estás poniendo nada jefe, ya me dirás tu que hay que añadir.";
        return;
    }

    // Genera un ID único para la nueva tarea.
    const id = generateUUID();

    // Crea el contenedor de la tarea.
    const div = doc.createElement("div");
        div.className = "tarea";
        div.id = id;

    // Inserta el contenido del textarea en la tarea.
    const p = doc.createElement("p");
        p.textContent = areaTexto.value.trim();
    div.appendChild(p);

    // Crea botones para acciones de tarea.
    const botones = doc.createElement("p");
        botones.className = "botones";

    // Botón para eliminar la tarea.
    const botonBorrar = doc.createElement("input");
        botonBorrar.type = "button";
        botonBorrar.value = "Borrar";
        botonBorrar.className = "del";
        botonBorrar.onclick = () => eliminarTarea(id); // Función flecha para añadirle eliminarTarea(id) al botón de Borrar.
    botones.appendChild(botonBorrar);

    // Botón para marcar tarea como finalizada.
    const botonAcabar = doc.createElement("input");
        botonAcabar.type = "button";
        botonAcabar.value = "Acabar";
        botonAcabar.className = "end";
        botonAcabar.onclick = () => finalizarTarea(id); // Función flecha para añadirle finalizarTarea(id) al botón de Acabar.
    botones.appendChild(botonAcabar);

    // Añade los botones al contenedor de la tarea.
    div.appendChild(botones);

    // Añade la tarea a la lista de tareas pendientes.
    doc.getElementById("pendientes").appendChild(div);
    areaTexto.value = "";

    // Resetea el placeholder del textarea.
    areaTexto.placeholder = placeholderVacio;
}

// Elimina una tarea basada en el ID proporcionado.
function eliminarTarea(id) {
    const tarea = doc.getElementById(id);
    
    if (tarea) {
        tarea.remove();
    }
}

// Marca una tarea como finalizada y la mueve a la sección de tareas acabadas.
function finalizarTarea(id) {
    const tarea = doc.getElementById(id);
    
    if (tarea) {
        tarea.classList.remove("tarea");
        tarea.classList.add("acabada");

        // Actualiza los botones de la tarea dandole nuevas funciones y nombres.
        const botonBorrar = tarea.querySelector(".del");
            botonBorrar.value = "Archivar";
            botonBorrar.onclick = () => archivarTarea(id);

        const botonAcabar = tarea.querySelector(".end");
            botonAcabar.value = "Volver";
            botonAcabar.onclick = () => revertirTarea(id);

        // Mueve la tarea a la sección de tareas acabadas.
        doc.getElementById("acabadas").appendChild(tarea);
    }
}

// Revierte una tarea finalizada de vuelta a la lista de tareas pendientes.
function revertirTarea(id) {
    const tarea = doc.getElementById(id);

    if (tarea) {
        tarea.classList.remove("acabada");
        tarea.classList.add("tarea");

        // Revierte acciones de la tarea.
        const botonBorrar = tarea.querySelector(".del");
            botonBorrar.value = "Borrar";
            botonBorrar.onclick = () => eliminarTarea(id);

        const botonAcabar = tarea.querySelector(".end");
            botonAcabar.value = "Acabar";
            botonAcabar.onclick = () => finalizarTarea(id);

        // Mueve la tarea de vuelta a la sección de tareas pendientes.
        doc.getElementById("pendientes").appendChild(tarea);
    }
}

// Oculta/Archiva una tarea acabada.
function archivarTarea(id) {
    const tarea = doc.getElementById(id);
    if (tarea) {
        tarea.classList.add("oculto");
    }
}

// Muestra tareas acabadas que han sido archivadas.
function mostrarArchivadas() {
    const tareasArchivadas = doc.querySelectorAll("#acabadas .oculto");
    
    tareasArchivadas.forEach(tarea => {
        tarea.classList.remove("oculto");
    });
}

// Se ejecuta cuando el documento ha cargado completamente.
window.onload = function() {
    // Limpia las tareas de muestra al inicio.
    const tareasPendientes = doc.querySelectorAll("#pendientes .tarea");
    tareasPendientes.forEach(tarea => { tarea.remove(); });

    const tareasAcabadas = doc.querySelectorAll("#acabadas .acabada");
    tareasAcabadas.forEach(tarea => { tarea.remove(); });

    // Al ejecutar el documento enlaza funciones a los botones iniciales correspondientes (Añadir y Mostrar).
    const botonAgregar = doc.querySelector(".add");
    botonAgregar.onclick = agregarTarea;

    const botonMostrar = doc.querySelector(".sho");
    botonMostrar.onclick = mostrarArchivadas;
};