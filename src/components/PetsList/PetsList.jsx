import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { selectUser } from 'redux/auth/selectors';
import styles from './PetsList.module.css';

import NoPetsAddedYet from '../../images/notHavePets.png';
import Loader from '../Loader/Loader';
import { PetsItem } from 'components/PetsItem/PetsItem';

import { deleteUserNoticeById } from '../../services/noticesAPI';
import { getCurrentUser } from 'services/auth';

export const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNewPetAdded, setIsNewPetAdded] = useState(false);

  const token = useSelector(selectUser)?.token;

  const fetchPets = async () => {
    try {
      const user = await getCurrentUser();
      setPets(user.myPets);
      setIsNewPetAdded(true);
      setIsLoading(false);
    } catch (error) {
      Notiflix.Notify.error('Oops. Something went wrong. Try again');
      setIsLoading(false);
      setIsNewPetAdded(false);
    }
  };

  useEffect(() => {
    fetchPets();
  }, [isNewPetAdded]);

  const handleDeleteItem = async petId => {
    try {
      await deleteUserNoticeById(petId, token);
      setPets(prevPets => prevPets.filter(pet => pet._id !== petId));
      Notiflix.Notify.success('Pet was deleted');
    } catch (error) {
      Notiflix.Notify.error('Oops. Something went wrong. Try again');
    }
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
