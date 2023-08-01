import { React, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RxCross1 } from 'react-icons/rx';
import pawprint from '../../images/pawprint1.svg';

import css from './GreetingModal.module.css';

const modalRoot = document.querySelector('#modal-root');

const ModalWindow = ({ onClose }) => {
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
          <h2 className={css.title}>Congrats!</h2>
          <p className={css.text}>Youre registration is success</p>

          <button type="button" onClick={onClose} className={css.buttonGo}>
            Go to profile
            <img
              src={pawprint}
              alt="pawprint"
              width={24}
              className={css.imagePawprint}
            />
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalWindow;
