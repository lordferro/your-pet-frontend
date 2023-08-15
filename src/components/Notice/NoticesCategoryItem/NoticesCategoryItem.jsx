import { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GoClock } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useAuth } from '../../../hooks';
import { HeartIcon } from '../../../icons/HeartIcon';
import { ModalNotice } from '../ModalNotice/ModalNotice';
import ModalWindow from '../../shared/AttentionModal';
import { ModalDeleteWindow } from '../../shared/ModalDeleteWindow';
import css from './NoticesCategoryItem.module.css';

import {
  deleteNoticeThunk,
  fetchAddToFavorite,
  fetchRemoveFromFavorite,
} from 'redux/notices/operations';

export const NoticeCategoryItem = ({
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
  isFavorite,
}) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [modalAcessWindow, setmodalAcessWindow] = useState(false);
  const [modalDeleteWindow, setModalDeleteCloseClick] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();
  const handleDeletePet = _id => {
    dispatch(deleteNoticeThunk(_id));
    setModalDeleteCloseClick(false);
  };

  // Функція для видалення або додавання картинки до улюбленої
  const handleFavoritePet = () => {
    if (!isLoggedIn) {
      setmodalAcessWindow(true);
      return;
    }

    if (!isFavorite) {
      dispatch(fetchAddToFavorite(_id));
    } else {
      dispatch(fetchRemoveFromFavorite(_id));
    }
  };

  // Функція для обрахунку віку
  const ageCount = birthData => {
    const birthDate = moment(birthData, 'DD-MM-YYYY');
    const currentDate = moment();

    const yearsDiff = currentDate.diff(birthDate, 'years');
    const monthsDiff = currentDate.diff(birthDate, 'month') % 12;
    const totalMonths = yearsDiff * 12 + monthsDiff;

    if (totalMonths < 12) {
      return `${totalMonths} months`;
    }

    if (totalMonths >= 12 && totalMonths < 24) {
      return `1 year`;
    }

    return `${yearsDiff} years`;
  };

  const age = ageCount(birthday);

  return (
    <li className={css.petItem} key={_id}>
      <div className={css.wrapper}>
        <div className={css.petImageWrapper}>
          <img alt={'pet'} src={petAvatar} className={css.petImage} />
        </div>
        <p className={css.noticeCategory}>{action}</p>
        <button
          className={
            !isFavorite ? css.addToFavoriteButton : css.removeFromFavoriteButton
          }
          onClick={handleFavoritePet}
        >
          <HeartIcon
            className={
              !isFavorite
                ? css.addToFavoriteButtonIcon
                : css.removeFromFavoriteButtonIcon
            }
          />
        </button>

        {user._id === owner._id && (
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => setModalDeleteCloseClick(true)}
          >
            <RiDeleteBinLine className={css.deleteButtonIcon} />
          </button>
        )}
        <div className={css.shortPetInfoWrapper}>
          <ul className={css.shortPetInfoWrapperList}>
            <li className={css.shortPetInfo}>
              <CiLocationOn className={css.shortPetInfoIcon} />
              <span>{location}</span>
            </li>
            <li className={css.shortPetInfo}>
              <GoClock className={css.shortPetInfoIcon} />
              <span>{age}</span>
            </li>
            <li className={css.shortPetInfo}>
              {sex === 'female' ? (
                <BsGenderFemale className={css.shortPetInfoIcon} />
              ) : (
                <BsGenderMale className={css.shortPetInfoIcon} />
              )}
              {sex}
            </li>
          </ul>
        </div>
      </div>
      <div className={css.petInfoWrapper}>
        <p className={css.petImageDescription}>{title}</p>
        <p
          className={css.allPetInfoModalOpen}
          onClick={() => setShowInfoModal(true)}
        >
          Learn more
        </p>
      </div>
      {showInfoModal && (
        <ModalNotice
          onModalCloseClick={() => setShowInfoModal(false)}
          _id={_id}
          name={name}
          title={title}
          birthday={birthday}
          type={type}
          comments={comments}
          sex={sex}
          action={action}
          price={price}
          location={location}
          petAvatar={petAvatar}
          owner={owner}
          isFavorite={isFavorite}
        />
      )}
      {modalAcessWindow && (
        <ModalWindow onClose={() => setmodalAcessWindow(false)} />
      )}
      {modalDeleteWindow && (
        <ModalDeleteWindow
          onModalDeleteCloseClick={() => setModalDeleteCloseClick(false)}
          handleDeletePet={handleDeletePet}
          name={name}
          _id={_id}
        />
      )}
    </li>
  );
};
