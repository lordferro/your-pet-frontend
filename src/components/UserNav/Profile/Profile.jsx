import React from 'react';
import user1 from '../../../images/user1.svg';
import { useAuth } from 'hooks';
import css from '../UserNav.module.css';

const Profile = ({ showName }) => {
  const { user } = useAuth();
  return (
    <div>
      <button type="button" className={css.buttonProf}>
        <img src={user1} alt="user" width={28} className={css.imageProf} />
        <p className={css.profile_name}>{showName && user?.name}</p>
      </button>
    </div>
  );
};

export default Profile;
