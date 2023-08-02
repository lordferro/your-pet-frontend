import { useEffect } from 'react';
import { MdClear } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import css from './ModalDeleteWindow.module.css';

export const ModalDeleteWindow = ({
  onModalDeleteCloseClick,
  handleDeletePet,
  name,
}) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onModalDeleteCloseClick();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        onModalDeleteCloseClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalDeleteCloseClick]);

  return (
    <div className={css.modalDeleteWindowOverlay} onClick={handleBackdropClick}>
      <div className={css.modalDeleteWindow}>
        <button
          type="button"
          className={css.modalDeleteWindowButtonClose}
          onClick={onModalDeleteCloseClick}
        >
          <MdClear className={css.modalDeleteWindowButtonCloseIcon} />
        </button>
        <h2 className={css.modalDeleteWindowTittle}>Delete adverstiment?</h2>
        <p className={css.modalDeleteWindowdescription}>
          Are you sure you want to delete “{name}”? <br />
          You can`t undo this action.
        </p>

        <div className={css.buttonWrapper}>
          <button
            type="button"
            className={css.cancelButton}
            onClick={onModalDeleteCloseClick}
          >
            Cancel
          </button>
          <button
            type="button"
            className={css.deleteButton}
            onClick={() => {
              onModalDeleteCloseClick();
              handleDeletePet();
            }}
          >
            Yes
            <RiDeleteBinLine className={css.deleteButtonIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};
