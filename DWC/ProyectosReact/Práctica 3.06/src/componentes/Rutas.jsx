import React from 'react';
import {Routes, Route} from 'react-router-dom';

// Componentes de página.
import HomePage from './paginas/HomePage.jsx';
import PeliculasPage from './paginas/PeliculasPage.jsx';
import PorTituloPage from './paginas/PorTituloPage.jsx';
import PorInterpretePage from './paginas/PorInterpretePage.jsx';
import PorDirectorPage from './paginas/PorDirectorPage.jsx';
import InterpretesPage from './paginas/InterpretesPage.jsx';
import GaleriaPage from './paginas/GaleriaPage.jsx';
import AcercaDePage from './paginas/AcercaDePage.jsx';

// Definición de rutas (relativas) para la aplicación.
const Rutas = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='peliculas' element={<PeliculasPage />}>
          <Route path='portitulo' element={<PorTituloPage />} />
          <Route path='porinterprete' element={<PorInterpretePage />} />
          <Route path='pordirector' element={<PorDirectorPage />} />
        </Route>
        <Route path='interpretes' element={<InterpretesPage />} />
        <Route path='galeria' element={<GaleriaPage />}>
          <Route path='portitulo' element={<PorTituloPage />} />
          <Route path='porinterprete' element={<PorInterpretePage />} />
          <Route path='pordirector' element={<PorDirectorPage />} />
        </Route>
        <Route path='acerca-de' element={<AcercaDePage />} />
    </Routes>
  )
}

export default Rutas