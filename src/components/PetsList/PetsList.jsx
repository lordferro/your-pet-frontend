import styles from './PetsList.module.css';
import { PetsItem } from 'components/PetsItem/PetsItem';

const pets = [
  {
    name: 'Bob',
    birthday: '00-00-0000',
    type: 'Spaniel',
    comments: 'my doggie',
    petAvatar:
      'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const PetsList = () => {
  return (
    <ul className={styles.list}>
      {pets.map(pet => (
        <PetsItem pet={pet} />
      ))}
    </ul>
  );
};
