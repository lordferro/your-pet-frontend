import { useEffect, useState } from 'react';
import { NoticeCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import css from './NoticesCategoriesList.module.css';
import { useAuth } from 'hooks';
import {
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from 'services/noticesAPI';

export const NoticesCategoriesList = ({ cards }) => {
  const [favoritesPets, setFavoritesPets] = useState([]);
  // const sortedCard = [...card].sort(
  //   (a, b) => new Date(b.date) - new Date(a.date)
  // );
  const { user } = useAuth();
  useEffect(() => {
    setFavoritesPets(user.favoritePets);
    console.log(favoritesPets)
  }, [favoritesPets, user.favoritePets]);

  const handelDeleteFavorite = id => {
    removeFromFavoriteNotices(id)
      .then(pet => {
        setFavoritesPets(prevPets => prevPets.filter(pet => pet._id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handelAddFavorite = id => {
    addToFavoriteNotices(id)
      .then(pet => {
        setFavoritesPets(prevPets => ({ ...prevPets, id }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ul className={css.cardList}>
      {cards.map(card => (
        <NoticeCategoryItem
          {...card}
          handelDeleteFavorite={handelDeleteFavorite}
          handelAddFavorite={handelAddFavorite}
          key={card._id}
        />
      ))}
    </ul>
  );
};
