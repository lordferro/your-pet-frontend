import { useLocation, Link } from 'react-router-dom';
import Notiflix from 'notiflix';

import { ReactComponent as PlusIcon } from '../../images/plus.svg';
import { ReactComponent as PlusIconSmall } from '../../images/plus-small.svg';

import { useAuth } from '../../hooks';
import styles from './AddPetButton.module.css';

export const AddPetButton = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  const handleClick = () => {
    if (!isLoggedIn) {
      Notiflix.Notify.warning(
        'You should be logged in to be able to add your pet'
      );
    }
  };

  return (
    <Link
      className={styles.button}
      to={isLoggedIn && '/add-pet'}
      state={{ from: location }}
      onClick={handleClick}
    >
      <span className={styles.label}>Add Pet</span>
      <PlusIcon className={styles.icon} width={24} height={24}></PlusIcon>
      <PlusIconSmall
        className={styles.iconSmall}
        width={24}
        height={24}
      ></PlusIconSmall>
    </Link>
  );
};
