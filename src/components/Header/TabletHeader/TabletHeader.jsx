import React, { useState } from 'react';
import css from './TabletHeader.module.css';
import Logo from '../../Logo/Logo';
import { AuthNav } from '../../AuthNav/AuthNav';
import { useAuth } from '../../../hooks/useAuth';
import Profile from '../../UserNav/Profile/Profile';
import LogoutButton from '../../UserNav/LogoutButton/LogoutButton';
import BurgerMenuTablet from 'components/BurgerMenu/BurgerMenuTablet/BurgerMenuTabler';

const TabletHeader = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <Logo className={css.logo} />
      <div className={css.user_navigation}>
        {isLoggedIn ? (
          isMenuOpen ? (
            <LogoutButton />
          ) : (
            <Profile showName={true} />
          )
        ) : (
          <AuthNav />
        )}
        <BurgerMenuTablet
          className={css.burger}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </header>
  );
};

export default TabletHeader;
