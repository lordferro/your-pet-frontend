import NewsItem from './NewsItem';
import css from './NewsList.module.css';

const NewsList = ({ news }) => {
  const sortedNews = [...news].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date)
  );
  return (
    <ul className={css.list}>
      {sortedNews.map(({ id, title, text, date, imgUrl, url }) => (
        <NewsItem
          key={id}
          id={id}
          title={title}
          text={text}
          date={date}
          imgUrl={imgUrl}
          url={url}
          loading="lazy"
        />
      ))}
    </ul>
  );
};

export default NewsList;