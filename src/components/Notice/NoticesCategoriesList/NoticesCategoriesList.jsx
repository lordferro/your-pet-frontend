import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { NoticeCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import css from './NoticesCategoriesList.module.css';
import { selectFavorite } from 'redux/notices/selectors';
import { useCallback } from 'react';
import { selectNotices } from '../../../redux/notices/selectors';
import { useAuth } from 'hooks';
import { deleteUserNoticeById } from 'services/noticesAPI';

export const NoticesCategoriesList = ({ cards }) => {
  const [notices, setNotices] = useState([]);
  const favorite = useSelector(selectFavorite);
  const noticesArray = useSelector(selectNotices);

  const { user } = useAuth();
  const token = user.token;
  const isFavorite = useCallback(id => favorite.includes(id), [favorite]);

  useEffect(() => {
    setNotices(noticesArray);
  }, [noticesArray]);

  const handleDeleteNotice = noticeId => {
    deleteUserNoticeById(noticeId, token)
      .then(() => {
        setNotices(prevNotice =>
          prevNotice.filter(not => not._id !== noticeId)
        );
        Notiflix.Notify.success('This item was deleted successfully');
      })
      .catch(error => {
        console.log(error);
        Notiflix.Notify.error('Something went wrong, try again  later');
      });
  };

  return (
    <ul className={css.cardList}>
      {cards.map(card => (
        <NoticeCategoryItem
          {...card}
          isFavorite={isFavorite(card._id)}
          key={card._id}
          handleDeleteNotice={handleDeleteNotice}
        />
      ))}
    </ul>
  );
};
