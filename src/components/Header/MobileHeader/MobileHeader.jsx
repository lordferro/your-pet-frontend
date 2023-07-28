import React, { useState } from 'react';
import css from './MobileHeader.module.css';
import Logo from '../../Logo/Logo';
import { useAuth } from '../../../hooks/useAuth';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import Profile from 'components/UserNav/Profile/Profile';

const MobileHeader = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={css.header}>
      <Logo className={css.logo} />
      <div className={css.user_navigation}>
        {isLoggedIn && !isMenuOpen && <Profile showName={false} />}
        <BurgerMenu
          className={css.burger}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </header>
  );
};

export default MobileHeader;
