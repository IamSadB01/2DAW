import React from "react";

const Pelicula = ({ pelicula, onClickPelicula }) => {
  return (
    <li
      key={pelicula.episode_id}
      onClick={() => onClickPelicula(pelicula.episode_id)}
    >
      {`${pelicula.episode_id}. ${pelicula.title}`}
    </li>
  );
};

export default Pelicula;