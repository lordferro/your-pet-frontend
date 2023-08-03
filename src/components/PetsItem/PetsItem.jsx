import PropTypes from 'prop-types';

import { ReactComponent as TrashIcon } from '../../images/trash-2.svg';
import styles from './PetsItem.module.css';

export const PetsItem = ({ pet, handleDeleteItem }) => {
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
                onClick={() => handleDeleteItem(pet._id)}
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
