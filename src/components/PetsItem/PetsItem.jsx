import { ReactComponent as TrashIcon } from '../../images/trash-2.svg';
import styles from './PetsItem.module.css';

export const PetsItem = ({ pet }) => {
  return (
    <>
      <li className={styles.cardContainer}>
        <img className={styles.cardImage} src={pet.petAvatar} alt={pet.name} />
        <div className={styles.cardContent}>
          <p className={styles.cardText}>
            <div className={styles.iconWrapper}>
              <span>
                <b>Name:</b>
                {pet.name}
              </span>
              <button type="submit" className={styles.trashBtn}>
                <TrashIcon className={styles.trashIcon} />
              </button>
            </div>
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
