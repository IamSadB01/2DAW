import React, { useState } from 'react';
import Formulario from './Formulario.jsx';
import ListaProductos from './ListaProductos.jsx';
import VaciarListaModal from './modales/VaciarListaModal.jsx';

const ListaCompra = () => {
  const [formulario, setFormulario] = useState({
    productos: [],
    nuevoProducto: {
      id: '',
      nombre: '',
      descripcion: '',
      precio: 0,
      unidades: 0,
      subtotal: 0,
    },
    mensaje: '', // Mensaje de error.
    mostrarModal: false, // Modal de eliminación de producto.
    productoAEliminar: null, // Producto a eliminar (para el modal).
    mostrarModalVaciarLista: false, // Modal de vaciado de lista.
  });

  // Función para mostrar un mensaje temporal en el estado.
  const mostrarMensaje = (texto) => {
    setFormulario({ ...formulario, mensaje: texto });
    setTimeout(() => {
      setFormulario({ ...formulario, mensaje: null });
    }, 5000);
  };

  // Función para agregar un producto al estado.
  const agregarProducto = () => {
    const { nuevoProducto, productos } = formulario;

    // Verifica si los campos requeridos del nuevo producto están completos.
    if (nuevoProducto.nombre && nuevoProducto.precio > 0 && nuevoProducto.unidades > 0) {
      const subtotal = nuevoProducto.precio * nuevoProducto.unidades;

      // Actualiza el estado con el nuevo producto.
      setFormulario({
        ...formulario,
        productos: [...productos, { ...nuevoProducto, subtotal: subtotal }],
        nuevoProducto: {
          id: crypto.randomUUID(),
          nombre: '',
          descripcion: '',
          precio: 0,
          unidades: 0,
          subtotal: 0,
        },
      });
    } else {
      mostrarMensaje('Por favor, completa todos los campos correctamente.');
    }
  };

  /* Modal Eliminar Producto */
  // Función para mostrar el modal de eliminación de producto.
  const mostrarModalEliminar = (producto) => {
    setFormulario({
      ...formulario,
      mostrarModal: true,
      productoAEliminar: producto,
    });
  };

  // Función para cerrar el modal de eliminación de producto.
  const cerrarModalEliminar = () => {
    setFormulario({
      ...formulario,
      mostrarModal: false,
      productoAEliminar: null,
    });
  };

  // Función para confirmar la eliminación de un producto.
  const confirmarEliminarProducto = () => {
    const nuevosProductos = formulario.productos.filter(
      (producto) => producto.id !== formulario.productoAEliminar.id // Elimina el producto del array de productos.
    );

    setFormulario({
      ...formulario,
      productos: nuevosProductos,
      mostrarModal: false,
      productoAEliminar: null,
    });
  };

  /* Modal Vaciar Lista */
  // Función para mostrar el modal de vaciado de lista.
  const mostrarModalVaciarLista = () => {
    setFormulario({
      ...formulario,
      mostrarModalVaciarLista: true,
    });
  };

  // Función para cerrar el modal de vaciado de lista.
  const cerrarModalVaciarLista = () => {
    setFormulario({
      ...formulario,
      mostrarModalVaciarLista: false,
    });
  };

  // Función para confirmar el vaciado de la lista.
  const confirmarVaciarLista = () => {
    setFormulario({
      ...formulario,
      productos: [],
      mostrarModalVaciarLista: false,
    });
  };

  // Función para calcular el total de la compra sumando los subtotales de los productos.
  const calcularTotal = () => {
    return formulario.productos.reduce((total, producto) => total + producto.subtotal, 0);
  };

  // Función para manejar cambios en los campos de entrada del formulario.
  const onInputChange = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      nuevoProducto: { ...formulario.nuevoProducto, [name]: value }
    });
  };

  return (
    <div>
      <h1>Lista de la Compra</h1>

      {/* Muestra un mensaje de error si hay uno en el estado. */}
      {formulario.mensaje && <div className='error-message'>{formulario.mensaje}</div>}

      <Formulario
        nuevoProducto={formulario.nuevoProducto}
        onInputChange={onInputChange}
        onAgregarProducto={agregarProducto}
      />

      <ListaProductos
        productos={formulario.productos}
        mostrarModalEliminar={mostrarModalEliminar}
      />

      <p className='total'>Total: {calcularTotal()}€</p>

      {/* Botón para mostrar el modal de vaciado de lista. */}
      <button className='vaciar-lista-button ' onClick={mostrarModalVaciarLista}>Vaciar Lista</button>

      {/* Muestra el modal de eliminación de producto si está activo en el estado. */}
      {/* Quería separar este modal en un componente igual que el de VaciarLista pero no lo he conseguido. */}
      {formulario.mostrarModal && (
        <div className="modal">
          <p>¿Estás seguro de que quieres eliminar este producto?</p>
          <button onClick={confirmarEliminarProducto}>Sí</button>
          <button onClick={cerrarModalEliminar}>No</button>
        </div>
      )}

      {/* Muestra el modal de vaciado de lista si está activo en el estado. */}
      {formulario.mostrarModalVaciarLista && (
        <VaciarListaModal
          onConfirm={confirmarVaciarLista}
          onCancel={cerrarModalVaciarLista}
        />
      )}
    </div>
  );
};

export default ListaCompra;