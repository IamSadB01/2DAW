import { Fragment } from 'react';
import Localizador from './componentes/EJ1/Localizador';
import Colores from './componentes/EJ2/Colores';
import Cronometro from './componentes/EJ3/Cronometro';
import './App.css';

const App = () => {
  return (
    <Fragment>
      {/* <Localizador /> */}
      {/* <Colores /> */}
      <Cronometro />
    </Fragment>
  );
};

export default App;