import React from 'react';

// Modal de vaciado de lista.
const VaciarListaModal = ({ onConfirm, onCancel }) => (
  <div className="modal">
    <p>¿Estás seguro de que quieres vaciar toda la lista de la compra?</p>
    <button onClick={onConfirm}>Sí</button>
    <button onClick={onCancel}>No</button>
  </div>
);

export default VaciarListaModal;
