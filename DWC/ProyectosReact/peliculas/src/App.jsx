import React from 'react';
import './App.css';
import Pelicula from './componentes/Pelicula.jsx';
import ContenedorPeliculas from './componentes/ContenedorPeliculas.jsx';

function App() {
  return (
    <React.Fragment>
      <ContenedorPeliculas />
    </React.Fragment>
  );
}

export default App