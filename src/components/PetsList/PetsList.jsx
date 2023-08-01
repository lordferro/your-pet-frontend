import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Notiflix from 'notiflix';

import { selectUser } from 'redux/auth/selectors';
import { getCurrentUser } from 'redux/auth/operation';

import styles from './PetsList.module.css';

import NoPetsAddedYet from '../../images/notHavePets.png';
import Loader from '../Loader/Loader';
import { PetsItem } from 'components/PetsItem/PetsItem';

import { deleteUserNoticeById } from '../../services/noticesAPI';

export const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = useSelector(selectUser)?.token;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
      .then(user => {
        console.log('User:', user);
        setPets(user.payload.myPets);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Error fetching current user:', error);
        setIsLoading(false);
      });
  }, [dispatch]);

  const handleDeleteItem = petId => {
    deleteUserNoticeById(petId, token)
      .then(() => {
        setPets(prevPets => prevPets.filter(pet => pet._id !== petId));
        Notiflix.Notify.success('Pet was deleted');
      })
      .catch(error => {
        Notiflix.Notify.success('Oops. Something went wrong. Try again');
      });
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
