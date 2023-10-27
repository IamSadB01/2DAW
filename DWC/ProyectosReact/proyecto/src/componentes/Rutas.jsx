import React from 'react';
import {Routes, Route} from 'react-router-dom';

const Rutas = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='peliculas' element={<PeliculasPage />}>
          <Route path='portitulo' element={<PorTitulo />} />
          <Route path='porinterprete' element={<PorInterprete />} />
          <Route path='pordirector' element={<PorDirector />} />
        </Route>
        <Route path='interpretes' element={<Elenco />} />
        <Route path='galeria' element={<Cartelera />} />
        <Route path='acerca-de' element={<AcercaDe />} />
    </Routes>
  )
}

export default Rutas