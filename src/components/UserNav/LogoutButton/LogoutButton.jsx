import React from 'react';
import shape from '../../../images/shape.svg';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import css from '../UserNav.module.css';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());
  return (
    <div>
      <button type="button" className={css.buttonLogout} onClick={handleLogOut}>
        Log out
        <img
          src={shape}
          alt="pawprint"
          width={17}
          className={css.imageLogout}
        />
      </button>
    </div>
  );
};

export default LogoutButton;
