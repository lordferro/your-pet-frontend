import { useDispatch, useSelector } from 'react-redux';
import styles from './PetsList.module.css';

import NoPetsAddedYet from '../../images/notHavePets.png';
import Loader from '../Loader/Loader';
import { PetsItem } from 'components/PetsItem/PetsItem';

import { selectIsLoading, selectMyPets } from 'redux/notices/selectors';
import { deletePetThunk } from 'redux/notices/operations';

export const PetsList = () => {
  const pets = useSelector(selectMyPets);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch()

  const handleDeleteItem = async petId => {
    dispatch(deletePetThunk(petId))
  };

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {pets.length <= 0 ? (
        <div className={styles.noPetWrapper}>
          <div className={styles.noPetsMessage}>No pets added yet</div>
          <img
            className={styles.noPetsImg}
            src={NoPetsAddedYet}
            alt="No Pets added yet"
          />
        </div>
      ) : (
        <ul className={styles.list}>
          {pets.map(pet => (
            <PetsItem
              key={pet._id}
              pet={pet}
              handleDeleteItem={() => handleDeleteItem(pet._id)}
            />
          ))}
        </ul>
      )}
    </>
  );
};
