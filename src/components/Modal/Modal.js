import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = (props) => {
  const { onClose, children } = props;

  const closeModal = () => {
    onClose();
  };

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button className='modal-close' onClick={closeModal}>
          <i className='fas fa-times'></i>
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
