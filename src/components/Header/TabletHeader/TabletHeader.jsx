import React from 'react';
import css from './TabletHeader.module.css';
import Logo from '../../Logo/Logo';
import { AuthNav } from '../../AuthNav/AuthNav';
import { useAuth } from '../../../hooks/useAuth';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Profile from '../../UserNav/Profile/Profile';

const TabletHeader = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Logo className={css.logo} />
      <div className={css.user_navigation}>
        {isLoggedIn ? <Profile showName={true}/> : <AuthNav />}
      <BurgerMenu className={css.burger}/>
      </div>
    </header>
  );
};

export default TabletHeader;
