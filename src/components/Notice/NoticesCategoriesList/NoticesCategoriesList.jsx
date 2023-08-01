import { NoticeCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import css from './NoticesCategoriesList.module.css';

export const NoticesCategoriesList = ({ cards }) => {
  // const sortedCard = [...card].sort(
  //   (a, b) => new Date(b.date) - new Date(a.date)
  // );

  return (
    <ul className={css.cardList}>
      {cards.map(card => (
        <NoticeCategoryItem {...card} key={card._id} />
      ))}
    </ul>
  );
};
