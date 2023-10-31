// biblioteca.js

// Función que inicia la generación de saludos.
const iniciarSaludos = (comenzarButton, pararButton, saludosContainer) => {
    let intervalId;

    // Configura un evento de clic en el botón "Comenzar Saludos".
    comenzarButton.addEventListener(
        "click",
        () => {
            intervalId = setInterval(() => {
                const h1 = document.createElement("h1");
                h1.textContent = "¡Hola Feo!";
                saludosContainer.appendChild(h1);
            }, 2000);
        }
    );
    
    // Configura un evento de clic en el botón "Parar Saludos".
    pararButton.addEventListener(
        "click",
        () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        }
    );
}

// Función que genera un color hexadecimal aleatorio.
const generarColorHexadecimal = () => {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función que cambia el color de fondo de la ventana.
const cambiarColorDeFondo = () => {
    document.body.style.backgroundColor = generarColorHexadecimal();
}

// Función que muestra la posición actual del ratón en un elemento HTML.
const mostrarPosicionRaton = (event, element) => {
    const x = event.clientX;
    const y = event.clientY;
    element.textContent = `Posición del ratón: X = ${x}, Y = ${y}`;
}

// Función para mostrar u ocultar el contenido del acordeón.
const toggleAcordeon = (contenido) => {
    if (contenido) {
        contenido.classList.toggle('block'); // Alterna la clase 'block' para mostrar u ocultar el contenido.
    }
}

// Módulo de exportaciones.
export { iniciarSaludos };

export { generarColorHexadecimal };
export { cambiarColorDeFondo };

export { mostrarPosicionRaton };

export { toggleAcordeon };