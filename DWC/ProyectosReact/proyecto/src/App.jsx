import React from 'react';
import './App.css';
import Cabecera from './componentes/jsx/Cabecera.jsx';
import Nav from './componentes/navegacion/Nav.jsx';
import Rutas from './componentes/Rutas.jsx';
import Pie from './componentes/jsx/Pie.jsx';

function App() {
  return (
    <React.Fragment>
      <Cabecera />
      <Nav />
      <Rutas />
      <Pie />
    </React.Fragment>
  );
}

export default App