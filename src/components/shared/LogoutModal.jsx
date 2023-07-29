import { React, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RxCross1 } from 'react-icons/rx';
import shape from '../../images/shape.svg';

import css from './LogoutModal.module.css';

const modalRoot = document.querySelector('#modal-root');

const ModalWindow = ({ onClose, onLogout }) => {
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
        <RxCross1
          className={css.icon}
          aria-label="Close modal window"
          onClick={onClose}
        />
        <div>
          <h2 className={css.title}>Already leaving?</h2>

          <div className={css.buttonContainer}>
            <button
              type="button"
              onClick={onClose}
              className={css.buttonCancel}
            >
              Cancel
            </button>
            <button type="button" onClick={onLogout} className={css.buttonYes}>
              Yes
              <img
                src={shape}
                alt="pawprint"
                width={24}
                className={css.imageLogout}
              />
            </button>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalWindow;
