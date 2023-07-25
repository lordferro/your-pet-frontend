import { React, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RxCross1 } from 'react-icons/rx';
import css from './ModalUserInfo.module.css';

const modalRoot = document.querySelector('#modal-root');

const ModalWindow = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modalWindow}>
        <RxCross1 className={css.icon} onClick={onClose} />
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default ModalWindow;
