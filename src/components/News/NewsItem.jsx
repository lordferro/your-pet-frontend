import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './NewsList.module.css';
import dayjs from 'dayjs';
import defaultImage from '../../images/img_default.jpg';

const NewsItem = ({ id, imgUrl, title, text, date, url }) => {
  const formattedDate = dayjs(date).format('DD/MM/YYYY');
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <li key={id} className={css.item}>
      <div className={css.imageContainer}>
        <img
          alt={title}
          loading="lazy"
          className={css.image}
          src={imageError ? defaultImage : imgUrl}
          onError={handleImageError}
        />
      </div>

      <div className={css.itemContainer}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.text}>{text}</p>
      </div>
      <div className={css.itemWrapper}>
        <p className={css.date}>{formattedDate}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={css.link}
        >
          Read more
        </a>
      </div>
    </li>
  );
};
export default NewsItem;

NewsItem.propTypes = {
    id: PropTypes.string,
    imgUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };