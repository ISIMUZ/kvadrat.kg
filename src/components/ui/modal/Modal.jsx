import React from 'react';

import './Modal.scss';


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Спасибо! Данные успешно отправлены.</p>
        <button className="modal-content__btn" onClick={onClose}>
        </button>
      </div>
    </div>
  );
};

export default Modal;
