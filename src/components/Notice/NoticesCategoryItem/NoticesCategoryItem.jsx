import { useState } from 'react';
import { HeartIcon } from '../../../icons/HeartIcon';
// import { BsHeart, BsGenderFemale } from 'react-icons/bs';
// import { BsFillSuitHeartFill,  BsGenderMale } from 'react-icons/bs';
import { BsGenderFemale } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { GoClock } from 'react-icons/go';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ModalNotice } from '../ModalNotice/ModalNotice';

import cat from '../../../images/cuteCat.jpg';
import css from './NoticesCategoryItem.module.css';

export const NoticeCategoryItem = () => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleModalInfoOpen = event => {
    setShowInfoModal(true);
  };

  const handleFavoritePet = event => {
    setFavorite(true);
  };

  // const modalInfoClose = () => {
  //   setShowInfoModal(false);
  // };

  const handleDeletePet = _id => {
    // dispatch(fetchDeleteNotice(_id));
    // setShowModalAccess(false);
  };
  const owner = true;

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
        {owner && (
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
              <CiLocationOn className={css.shortPetInfoIcon} /> Lviv
            </li>
            <li className={css.shortPetInfo}>
              <GoClock className={css.shortPetInfoIcon} /> 1 year
            </li>
            <li className={css.shortPetInfo}>
              <BsGenderFemale className={css.shortPetInfoIcon} />
              female
            </li>
          </ul>
        </div>
      </div>
      <div className={css.petInfoWrapper}>
        <p className={css.petImageDescription}>Cute dog looking for a home</p>
        <p className={css.allPetInfoModalOpen} onClick={handleModalInfoOpen}>
          Learn more
        </p>
      </div>
      {showInfoModal && <ModalNotice onClick={() => setShowInfoModal(false)} />}
    </li>
  );
};
