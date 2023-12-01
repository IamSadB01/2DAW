import React, {Fragment, useState, useEffect} from 'react';
import './Cronometro.css';

const Cronometro = () => {
  const valorInicialCentesimas = 0;
  const valorInicialCronometro = false;
  const [cronometro, setCronometro] = useState(valorInicialCronometro);
  const [centesimas, setCentesimas] = useState(valorInicialCentesimas);

  // useEffect que inicializa el cronómetro.
  useEffect(() => {
    if (cronometro) {
      let intervalo = setInterval(() => {
        setCentesimas(centesimas => centesimas + 1);
      }, 10);
  
      return () => clearInterval(intervalo);
    }
  }, [cronometro]);

  // Función que reinicia el cronómetro.
  const reiniciar = () => {
    setCentesimas(valorInicialCentesimas);
    setCronometro(valorInicialCronometro);
  }

  // Función que pausa el cronómetro.
  const pausar = () => {
    setCronometro(valorInicialCronometro);
  }

  // Función que empieza el cronómetro.
  const empezar = () => {
    setCronometro(true); 
  }

  // Función para formatear el tiempo.
  const mostrarCentesimas = (centesimas) => {
    let segundos = Math.floor(centesimas / 100); // 1 segundo = 100 centésimas.
    let centesimasMostrar = centesimas % 100;

    // Devuelve el tiempo formateado.
    return `${segundos < 10 ? '0' + segundos : segundos}:${centesimasMostrar < 10 ? '0' + centesimasMostrar : centesimasMostrar}`;
  }

  return (
    <Fragment>
      <div className="content">
        <div className="cronometro">
          <div className="cronometroMostrar">{mostrarCentesimas(centesimas)}</div>
        </div>
        <div className='main-container-cronometro'>
          <button className="button empezar" onClick={() => empezar()}>Empezar</button>
          <button className="button pausar" onClick={() => pausar()}>Pausar</button>
          <button className="button reiniciar" onClick={() => reiniciar()}>Reiniciar</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Cronometro