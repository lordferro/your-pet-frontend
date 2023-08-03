import PropTypes from 'prop-types';
import { useState } from 'react';

import { ReactComponent as TrashIcon } from '../../images/trash-2.svg';
import styles from './PetsItem.module.css';

import { ModalDeleteWindow } from 'components/shared/ModalDeleteWindow';

export const PetsItem = ({ pet, handleDeleteItem }) => {
  const [showModal, setShowModal] = useState(false);

  const onDelete = () => {
    handleDeleteItem(pet._id);
    setShowModal(false);
  };

  return (
    <>
      <li className={styles.cardContainer}>
        <img className={styles.cardImage} src={pet.petAvatar} alt={pet.name} />
        <div className={styles.cardContent}>
          <p className={styles.cardText}>
            <span className={styles.iconWrapper}>
              <span>
                <b>Name:</b>
                {pet.name}
              </span>
              <button
                type="submit"
                className={styles.trashBtn}
                onClick={() => setShowModal(true)}
              >
                <TrashIcon className={styles.trashIcon} />
              </button>
            </span>
          </p>

          <p className={styles.cardText}>
            <b>Date of birth:</b>
            {pet.birthday}
          </p>
          <p className={styles.cardText}>
            <b>Type:</b>
            {pet.type}
          </p>
          <p className={styles.cardText}>
            <b>Comments:</b>
            {pet.comments}
          </p>
        </div>
      </li>
      {showModal && (
        <ModalDeleteWindow
          name={pet.name}
          _id={pet._id}
          handleDeletePet={onDelete}
          onModalDeleteCloseClick={() => setShowModal(false)}
        />
      )}
    </>
  );
};

PetsItem.propTypes = {
  pet: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    comments: PropTypes.string,
    petAvatar: PropTypes.string,
  }),
  handleDeleteItem: PropTypes.func.isRequired,
};
