import css from './UserNav.module.css';
import shape from '../../images/shape.svg';
import user1 from '../../images/user1.svg';
// import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';

export const UserNav = () => {
  const dispatch = useDispatch();

  // const {user} = useAuth

  const handleLogOut = () => dispatch(logOut())


  return (
    <div>
      <div className={css.UserNavContainer}>
        <button
          type="button"
          className={css.buttonLogout}
          onClick={handleLogOut}
        >
          Log out
          <img
            src={shape}
            alt="pawprint"
            width={17}
            className={css.imageLogout}
          />
        </button>
        <button type="button" className={css.buttonProf}>
          <img src={user1} alt="user" width={28} className={css.imageProf} />
          profile
        </button>
      </div>
    </div>
  );
};
