import { NoticeCategoryItem } from '../NoticesCategoryItem/NoticesCategoryItem';
import css from './NoticesCategoriesList.module.css';

export const NoticesCategoriesList = () => {
  // const sortedCard = [...card].sort(
  //   (a, b) => new Date(b.date) - new Date(a.date)
  // );

  return (
    <ul className={css.cardList}>
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />
      <NoticeCategoryItem />

      {/* {sortedCard.map(card => (
        <NoticeCategoryItem {...card} key={card._id} />
      ))} */}
    </ul>
  );
};
