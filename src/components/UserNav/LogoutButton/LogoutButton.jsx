import { React, useState } from 'react';
import shape from '../../../images/shape.svg';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import LogoutModal from '../../shared/LogoutModal';
import css from '../UserNav.module.css';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <button type="button" className={css.buttonLogout} onClick={openModal}>
        Log out
        <img
          src={shape}
          alt="pawprint"
          width={17}
          className={css.imageLogout}
        />
      </button>

      {modalOpen && (
        <LogoutModal onClose={closeModal} onLogout={handleLogOut} />
      )}
    </div>
  );
};

export default LogoutButton;
