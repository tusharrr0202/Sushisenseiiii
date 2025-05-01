import React from 'react';
import '../styles/home.css';

const AlertModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div>{message}</div>
        <button onClick={onClose}>x</button> {/* Change to 'x' */}
      </div>
    </div>
  );
};

export default AlertModal;