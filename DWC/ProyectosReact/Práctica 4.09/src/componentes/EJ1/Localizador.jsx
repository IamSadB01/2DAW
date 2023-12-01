import React, { Fragment, useState, useEffect } from "react";
import "./Localizador.css";

const Localizador = () => {
  const valorInicial = {
    x: 0,
    y: 0,
  };
  const [coordenadas, setCoordenadas] = useState(valorInicial);

  useEffect(() => {
    // Función que almacena las coordenadas del ratón en el estado.
    const actualizarCoordenadas = (event) => {
      setCoordenadas({
        x: event.clientX,
        y: event.clientY
      });
    };

    // EventListener que llama a la función actualizarCoordenadas cuando se mueve el ratón.
    document.addEventListener("mousemove", actualizarCoordenadas);

    // Elimina el EventListener cuando se desmonta el componente.
    return () => {
      document.removeEventListener("mousemove", actualizarCoordenadas);
    };
  },[]);

  return (
    <Fragment>
      <div className="coords-container">
        <h1>X: {coordenadas.x} Y: {coordenadas.y}</h1>
      </div>
    </Fragment>
  );
};

export default Localizador;
