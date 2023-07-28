import React from 'react';
import burger from '../../images/menu-hamburger.svg';
import Navigation from 'components/Navigation/Navigation';
import css from './BurgerMenu.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Profile from 'components/UserNav/Profile/Profile';
import { useAuth } from 'hooks';
import LogoutButton from 'components/UserNav/LogoutButton/LogoutButton';
import { useMediaQuery } from 'react-responsive';

const BurgerMenu = ({ setIsMenuOpen, isMenuOpen }) => {
  const { isLoggedIn } = useAuth();
  const isMobileScreen = useMediaQuery({ maxWidth: 767 });

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.add('lock-scroll');
  };

  return (
    <div className={css.BurgerMenuContainer}>
      <img
        src={burger}
        alt="BurgerMenuIcon"
        onClick={handleMenuClick}
        className={css.BurgerMenu}
        width={24}
      />
      {isMenuOpen && (
        <div className={css.MenuContainer}>
          {isLoggedIn ? <Profile showName={true} /> : isMobileScreen ? <AuthNav /> : null}
          <Navigation />
          {isLoggedIn ? <LogoutButton /> : null}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
