import React from 'react';

const Formulario = ({ nuevoProducto, onInputChange, onAgregarProducto }) => {
  return (
    <form>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={nuevoProducto.nombre}
          onChange={onInputChange}
        />
      </label>

      <label>
        Descripción:
        <input
          type="text"
          name="descripcion"
          value={nuevoProducto.descripcion}
          onChange={onInputChange}
        />
      </label>

      <label>
        Precio:
        <input
          type="number"
          name="precio"
          value={nuevoProducto.precio}
          onChange={onInputChange}
        />
      </label>

      <label>
        Unidades:
        <input
          type="number"
          name="unidades"
          value={nuevoProducto.unidades}
          onChange={onInputChange}
        />
      </label>

      <button type="button" onClick={onAgregarProducto}>
        Agregar Producto
      </button>
    </form>
  );
};

export default Formulario;
