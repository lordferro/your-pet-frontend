import React from 'react';
import user1 from '../../../images/user1.svg';
import { useAuth } from 'hooks';
import css from '../UserNav.module.css';
import { Link } from 'react-router-dom';

const Profile = ({ showName }) => {
  const { user } = useAuth();
  return (
    <div>
      <Link to="/user" className={css.link}>      
      <button type="button" className={css.buttonProf}>
        <img src={user1} alt="user" width={28} className={css.imageProf} />
        <p className={css.profile_name}>{showName && user?.name}</p>
      </button>
      </Link>

    </div>
  );
};

export default Profile;
