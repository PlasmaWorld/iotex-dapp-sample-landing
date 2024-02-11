import React from 'react';
import styles from '../M/modal.module.css'; // adjust the path if necessary

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div className={styles['modal-wrapper']} onClick={(e) => e.stopPropagation()}>
        <div className={styles['modal-content']}>
          <button className={styles['close-button']} onClick={onClose}>Close</button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
