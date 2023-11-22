import React from 'react';

// Función para mostrar el modal de eliminación de producto.
const ListaProductos = ({ productos, mostrarModalEliminar }) => {
  return (
    <div>
      {productos.length === 0 ? (
        <p>No hay productos en la lista todavía.</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.unidades} {producto.nombre} - Subtotal: {producto.subtotal}{'€ '}
              <button onClick={() => mostrarModalEliminar(producto)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListaProductos;
