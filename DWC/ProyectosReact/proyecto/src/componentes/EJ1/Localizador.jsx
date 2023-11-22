import React, { Fragment, useState, useEffect } from "react";
import "./Localizador.css";

const Localizador = () => {
  const valorInicial = {
    x: 0,
    y: 0,
  };
  const [coordenadas, setCoordenadas] = useState(valorInicial);

  useEffect(() => {
    const actualizarCoordenadas = (event) => {
      setCoordenadas({
        x: event.clientX,
        y: event.clientY
      });
    };

    document.addEventListener("mousemove", actualizarCoordenadas);

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
