import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { NoticeCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import css from './NoticesCategoriesList.module.css';
import { useAuth } from 'hooks';
import { selectNotices } from '../../../redux/notices/selectors';
import {
  addToFavoriteNotices,
  removeFromFavoriteNotices,
  deleteUserNoticeById,
} from 'services/noticesAPI';
// import { getCurrentUser } from 'redux/auth/operation';

export const NoticesCategoriesList = ({ cards }) => {
  const [favoritesPets, setFavoritesPets] = useState([]);
  const noticesArray = useSelector(selectNotices);
  const [notices, setNotices] = useState([]);
  // const dispatch = useDispatch();

  const { user } = useAuth();
  const token = user.token;

  useEffect(() => {
    setNotices(noticesArray);
    setFavoritesPets(user.favoritePets);
  }, [favoritesPets, noticesArray, user.favoritePets]);

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

  const handleDeleteNotice = noticeId => {
    deleteUserNoticeById(noticeId, token)
      .then(() => {
        setNotices(prevNotice =>
          prevNotice.filter(not => not._id !== noticeId)
        );
        Notiflix.Notify.success('Pet was deleted');
      })
      .catch(error => {
        console.log(error);
        Notiflix.Notify.success(
          'Something went wrong! Please try again later!'
        );
      });
  };

  return (
    <ul className={css.cardList}>
      {cards.map(card => (
        <NoticeCategoryItem
          {...card}
          handelDeleteFavorite={handelDeleteFavorite}
          handelAddFavorite={handelAddFavorite}
          handleDeleteNotice={handleDeleteNotice}
          key={card._id}
        />
      ))}
    </ul>
  );
};
