import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Notiflix from 'notiflix';

import { selectUser } from 'redux/auth/selectors';

import styles from './PetsList.module.css';

import Loader from '../Loader/Loader';
import { PetsItem } from 'components/PetsItem/PetsItem';

import { getCurrentUser } from '../../services/auth';
import { deleteUserNoticeById } from '../../services/noticesAPI';

export const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = useSelector(selectUser)?.token;

  useEffect(() => {
    getCurrentUser()
      .then(user => {
        setPets(user.myPets);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('error with fetching current user', error);
        setIsLoading(false);
      });
  }, []);

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
    <ul className={styles.list}>
      {pets.map(pet => (
        <PetsItem
          key={pet._id}
          pet={pet}
          handleDeleteItem={() => handleDeleteItem(pet._id)}
        />
      ))}
    </ul>
  );
};
