import ModalUserInfo from 'components/ModalUserInfo/ModalUserInfo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PiPencilSimpleLineLight } from 'react-icons/pi';

import { updateUser } from 'redux/auth/operation';
import { selectUser } from 'redux/auth/selectors';
// import { ReactComponent as EditUserDataImg } from '../../images/edit.svg';
import css from './UserPage.module.css';

const { UserForm } = require('components/UserForm/UserForm');

const UserPage = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const onToggleModalShow = () => {
    setIsModalShow(prevState => !prevState);
  };

  const onSubmit = newUserData => {
    const formData = new FormData();
    console.log('formData', formData);

    if (newUserData.userAvatar !== user.userAvatar) {
      formData.append('userAvatar', newUserData.userAvatar);
    }
    if (newUserData.name !== user.name) {
      formData.append('name', newUserData.name);
    }
    if (newUserData.email !== user.email) {
      formData.append('email', newUserData.email);
    }
    if (newUserData.birthDate !== user.birthDate) {
      formData.append('birthDate', newUserData.birthDate);
    }
    if (newUserData.phone !== user.phone) {
      formData.append('phone', newUserData.phone);
    }
    if (newUserData.city !== user.city) {
      formData.append('city', newUserData.city);
    }

    console.log('updated formData', formData);
    console.log('formData.length', Object.fromEntries(formData.entries()));

    if (Object.keys(Object.fromEntries(formData.entries())).length) {
      dispatch(updateUser(formData));
    }
    onToggleModalShow();
  };

  const saveNewAvatar = userAvatar => {
    const formData = new FormData();

    formData.append('userAvatar', userAvatar);

    dispatch(updateUser(formData));
  };

  return (
    <>
      <h2 className={css.title}>My information:</h2>
      <div className={css.userDataContainer}>
        <button
          onClick={onToggleModalShow}
          className={css.informationEditUserBtn}
          aria-label="edit user data"
        >
          <PiPencilSimpleLineLight className={css.iconEdit} size={24} />
        </button>
        <UserForm readonly={true} user={user} />
      </div>
      {isModalShow && (
        <ModalUserInfo onClose={onToggleModalShow}>
          <UserForm
            readonly={false}
            user={user}
            onSubmit={onSubmit}
            saveNewAvatar={saveNewAvatar}
          />
        </ModalUserInfo>
      )}
    </>
  );
};

export default UserPage;
