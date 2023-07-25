import React from 'react';
import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { UserNav } from 'components/UserNav/UserNav';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Logo className={css.logo} />
      <div>
        <Navigation className={css.navigation}/>
      </div>
      <div className={css.user_navigation}>
        {isLoggedIn ? <UserNav /> : <AuthNav />}
      </div>
    </header>
  );
};

export default Header;
