import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks';
import { HeartIcon } from '../../../icons/HeartIcon';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GoClock } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import ModalWindow from '../../shared/ModalWindow';

import cat from '../../../images/cuteCat.jpg';
import css from './NoticesCategoryItem.module.css';

export const NoticeCategoryItem = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [modalAcessWindow, setmodalAcessWindow] = useState(false);
  const { isLoggedIn, user } = useAuth();

  const [favorite, setFavorite] = useState(false);
  // const dispatch = useDispatch();

  // Для відображення статі
  const male = true;
  const sex = male;

  const handleDeletePet = _id => {
    // dispatch(fetchDeleteNotice(_id));
    // setShowModalAccess(false);
  };

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

  // Функція для нормалізації локації
  const normalizedLocation = location => {
    return location.slice(0, 4) + `...`;
  };

  // Функція для обрахунку віку
  const ageCount = birthDate => {
    const num = Number(birthDate);
    const birthDay = new Date(num);
    const currentDate = Date.now();

    const diffInYears = Math.floor(
      (currentDate - birthDay) / (1000 * 60 * 60 * 24) / 365
    );
    if (diffInYears === 0) {
      const diffInMounth = Math.floor(
        (currentDate - birthDay) / (1000 * 60 * 60 * 24) / 30
      );
      return diffInMounth + ' mon';
    }
    return diffInYears + ' year';
  };

  return (
    <li className={css.petItem}>
      <div className={css.wrapper}>
        <div className={css.petImageWrapper}>
          <img alt={'pet'} src={cat} className={css.petImage} />
        </div>
        <p className={css.noticeCategory}>In good hands</p>
        {!favorite ? (
          <button
            className={css.addToFavoriteButton}
            onClick={handleFavoritePet}
          >
            <HeartIcon className={css.addToFavoriteButtonIcon} />
          </button>
        ) : (
          <button className={css.removeFromFavoriteButton}>
            <HeartIcon
              className={css.removeFromFavoriteButtonIcon}
              onClick={handleFavoritePet}
            />
          </button>
        )}
        {user.id && (
          <button
            className={css.deleteButton}
            type="button"
            onClick={handleDeletePet}
          >
            <RiDeleteBinLine className={css.deleteButtonIcon} />
          </button>
        )}
        <div className={css.shortPetInfoWrapper}>
          <ul className={css.shortPetInfoWrapperList}>
            <li className={css.shortPetInfo}>
              <CiLocationOn className={css.shortPetInfoIcon} />
              {normalizedLocation('Chernigiv')}
            </li>
            <li className={css.shortPetInfo}>
              <GoClock className={css.shortPetInfoIcon} />
              {ageCount('20.12.2020')}
            </li>
            <li className={css.shortPetInfo}>
              {sex === 'female' ? (
                <BsGenderFemale className={css.shortPetInfoIcon} />
              ) : (
                <BsGenderMale className={css.shortPetInfoIcon} />
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className={css.petInfoWrapper}>
        <p className={css.petImageDescription}>Cute dog looking for a home</p>
        <p
          className={css.allPetInfoModalOpen}
          onClick={() => setShowInfoModal(true)}
        >
          Learn more
        </p>
      </div>
      {showInfoModal && (
        <ModalNotice onModalCloseClick={() => setShowInfoModal(false)} />
      )}
      {modalAcessWindow && (
        <ModalWindow onClose={() => setmodalAcessWindow(false)} />
      )}
    </li>
  );
};
