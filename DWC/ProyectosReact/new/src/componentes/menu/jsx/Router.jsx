import React from 'react';
import {Routes, Route} from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='peliculas' element={<ContenedorPeliculas />}></Route>
        <Route path='interpretes' element={<Elenco />} />
        <Route path='galeria' element={<Cartelera />} />
        <Route path='acerca-de' element={<AcercaDe />} />
    </Routes>
  )
}

export default Router