import css from './UserNav.module.css';
import shape from '../../images/shape.svg';
import user from '../../images/user1.svg';

export const UserNav = () => {
  const handleLogoutClick = () => {
    console.log('Log out button clicked!');
  };
  return (
    <div>
      <div className={css.UserNavContainer}>
        <button
          type="button"
          className={css.buttonLogout}
          onClick={handleLogoutClick}
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
          <img src={user} alt="user" width={28} className={css.imageProf} />
          Profile
        </button>
      </div>
    </div>
  );
};
