import { useState, useEffect } from 'react';
import { HeartIcon } from '../../../icons/HeartIcon';
import { MdClear } from 'react-icons/md';
import { useAuth } from '../../../hooks';
import ModalWindow from '../../shared/ModalWindow';
import cat from '../../../images/cuteCat.jpg';
import css from './ModalNotice.module.css';

export const ModalNotice = ({ onModalCloseClick }) => {
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
      // dispatch(fetchAddToFavorite(id));
      setFavorite(true);
    } else {
      // dispatch(fetchDeleteFromFavorite(id));
      setFavorite(false);
    }
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
            <img className={css.petImage} alt={'pet'} src={cat} />
            <p className={css.noticeCategory}>In good hands</p>
          </div>
          <div>
            <h2 className={css.petInfoTableTittle}>
              Cute dog looking for a home
            </h2>
            <table className={css.petInfoTable}>
              <tbody>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>Name:</th>
                  <td className={css.petInfoItemBody}>Rich</td>
                </tr>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>Birthday:</th>
                  <td className={css.petInfoItemBody}>21.09.2020</td>
                </tr>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>Type:</th>
                  <td className={css.petInfoItemBody}>Pomeranian</td>
                </tr>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>Place:</th>
                  <td className={css.petInfoItemBody}>Lviv</td>
                </tr>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>The sex:</th>
                  <td className={css.petInfoItemBody}>female</td>
                </tr>
                <tr className={css.petInfoItem}>
                  <th className={css.petInfoItemHeading}>Email:</th>
                  <td className={css.petInfoItemBody}>
                    <a
                      href={'mailto:someone@example.com'}
                      className={css.petInfoItemLink}
                    >
                      someone@example.com
                    </a>
                  </td>
                </tr>
                <tr className={css.petInfoItem}>
                  <td className={css.petInfoItemHeading}>Phone:</td>
                  <td className={css.petInfoItemBody}>
                    <a href={'tel:1233'} className={css.petInfoItemLink}>
                      +38034343444
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className={css.modalNoticeComment}>
          Comments: Rich would be the perfect addition to an active family that
          loves to play and go on walks. I bet he would love having a doggy
          playmate too!
        </p>
        <div className={css.modalNoticeButtonsWrapper}>
          {favorite ? (
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
          <a href={'tel:1233'} className={css.contactButtonLink}>
            Contact
          </a>
        </div>
      </div>
      {modalAcessWindow && (
        <ModalWindow onClose={() => setmodalAcessWindow(false)} />
      )}
    </div>
  );
};
