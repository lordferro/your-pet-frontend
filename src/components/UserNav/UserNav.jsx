import css from './UserNav.module.css';

import Profile from './Profile/Profile';
import LogoutButton from './LogoutButton/LogoutButton';

export const UserNav = () => {
  return (
    <div>
      <div className={css.UserNavContainer}>
        <LogoutButton />
        <Profile showName={true}/>
      </div>
    </div>
  );
};
