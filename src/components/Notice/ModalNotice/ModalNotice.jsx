import { useState, useEffect } from 'react';
import { HeartIcon } from '../../../icons/HeartIcon';
import { MdClear } from 'react-icons/md';
import { useAuth } from '../../../hooks';
import ModalWindow from '../../shared/AttentionModal';
import cat from '../../../images/cuteCat.jpg';
import css from './ModalNotice.module.css';
import {
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from 'services/noticesAPI';

export const ModalNotice = ({
  onModalCloseClick,
  _id,
  name,
  title,
  birthday,
  type,
  comments,
  sex,
  action,
  price,
  location,
  petAvatar,
  owner,
  handelDeleteFavorite,
  handelAddFavorite,
}) => {
  const [modalAcessWindow, setmodalAcessWindow] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const { isLoggedIn } = useAuth();

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onModalCloseClick();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        onModalCloseClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalCloseClick]);

  // Функція для видалення або додавання картинки до улюбленої
  const handleFavoritePet = () => {
    if (!isLoggedIn) {
      setmodalAcessWindow(true);
      return;
    }

    if (!favorite) {
      addToFavoriteNotices(_id).then(() => {
        handelAddFavorite(_id);
      });
      console.log('+');
      setFavorite(true);
    } else {
      removeFromFavoriteNotices(_id).then(() => {
        handelDeleteFavorite(_id);
      });
      console.log('-');
      setFavorite(false);
    }
  };

  //Функція для нормалізації дати народження
  const normalizedBirthDate = date => {
    return date.replaceAll('-', '.');
  };

  return (
    <div className={css.modalNoticeOverlay} onClick={handleBackdropClick}>
      <div className={css.modalNoticeWindow}>
        <button
          type="button"
          className={css.modalNoticeWindowButtonClose}
          onClick={onModalCloseClick}
        >
          <MdClear className={css.modalNoticeWindowButtonCloseIcon} />
        </button>
        <div className={css.petInfoWrapper}>
          <div className={css.petImageWrapper}>
            {petAvatar ? (
              <img className={css.petImage} alt={'pet'} src={petAvatar} />
            ) : (
              <img alt={'pet'} src={cat} className={css.petImage} />
            )}
            <p className={css.noticeCategory}>{action}</p>
          </div>
          <div>
            <h2 className={css.petInfoTableTittle}>{title}</h2>
            <table className={css.petInfoTable}>
              <tbody>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>Name:</th>
                  <td className={css.petInfoItemBody}>{name}</td>
                </tr>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>Birthday:</th>
                  <td className={css.petInfoItemBody}>
                    {normalizedBirthDate(birthday)}
                  </td>
                </tr>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>Type:</th>
                  <td className={css.petInfoItemBody}>{type}</td>
                </tr>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>Place:</th>
                  <td className={css.petInfoItemBody}>{location}</td>
                </tr>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>The sex:</th>
                  <td className={css.petInfoItemBody}>{sex}</td>
                </tr>
                {price && action === 'sell' && (
                  <tr className={css.petInfoItem}>
                    <th className={css.petInfoItemHeading}>Price:</th>
                    <td className={css.petInfoItemBody}>{price}</td>
                  </tr>
                )}
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>Email:</th>
                  <td className={css.petInfoItemBody}>
                    <a
                      href="mailto:{owner.email}"
                      className={css.petInfoItemLink}
                    >
                      {owner.email}
                    </a>
                  </td>
                </tr>
                {owner.phone && (
                  <tr className={css.petInfoItem}>
                    <td className={css.petInfoItemHeading}>Phone:</td>
                    <td className={css.petInfoItemBody}>
                      <a
                        href="tel:{owner.phone}"
                        className={css.petInfoItemLink}
                      >
                        {owner.phone}
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {comments && (
          <p className={css.modalNoticeComment}>Comments: {comments}</p>
        )}

        <div className={css.modalNoticeButtonsWrapper}>
          {!favorite ? (
            <button
              className={css.noticeModalAddToFavoriteButton}
              onClick={handleFavoritePet}
            >
              Add to
              <HeartIcon className={css.noticeModalAddToFavoriteButtonIcon} />
            </button>
          ) : (
            <button
              className={css.noticeModalRemoveFromFavoriteButton}
              onClick={handleFavoritePet}
            >
              Remove from
              <HeartIcon
                className={css.noticeModalRemoveFromFavoriteButtonIcon}
              />
            </button>
          )}
          {owner.phone && (
            <a href="tel:{owner.phone}" className={css.contactButtonLink}>
              Contact
            </a>
          )}
        </div>
      </div>
      {modalAcessWindow && (
        <ModalWindow onClose={() => setmodalAcessWindow(false)} />
      )}
    </div>
  );
};
