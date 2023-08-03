
import { useSelector } from 'react-redux';
import { NoticeCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import css from './NoticesCategoriesList.module.css';
import { selectFavorite } from 'redux/notices/selectors';
import { useCallback } from 'react';

export const NoticesCategoriesList = ({ cards }) => {
      const favorite = useSelector(selectFavorite);

      const isFavorite = useCallback(id => favorite.includes(id), [favorite]);

  const handleDeleteNotice = noticeId => {
    deleteUserNoticeById(noticeId, token)
      .then(() => {
        setNotices(prevNotice =>
          prevNotice.filter(not => not._id !== noticeId)
        );
        Notiflix.Notify.success('This item was deleted');
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
        <NoticeCategoryItem {...card} isFavorite={isFavorite(card._id)} key={card._id} />
      ))}
    </ul>
  );
};
