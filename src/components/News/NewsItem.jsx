import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './newsList.module.scss';
import dayjs from 'dayjs';
import defaultImage from '../../images/img_default.jpg';

const NewsItem = ({ id, imgUrl, title, text, date, url }) => {
  const formattedDate = dayjs(date).format('DD/MM/YYYY');
  const [imageError, setImageError] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <li key={id} className={styles.item}>
      <div className={styles.imageContainer}>
        <img
          alt={title}
          loading="lazy"
          className={styles.image}
          src={imageError ? defaultImage : imgUrl}
          onError={handleImageError}
        />
      </div>

      <div className={styles.itemContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.itemWrapper}>
        <p className={styles.date}>{formattedDate}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
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