import React, { useEffect } from 'react';
import burger from '../../../images/menu-hamburger.svg';
import cross from '../../../images/cross-burger.svg'
import Navigation from 'components/Navigation/Navigation';
import css from '../BurgerMenu.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Profile from 'components/UserNav/Profile/Profile';
import { useAuth } from 'hooks';
import LogoutButton from 'components/UserNav/LogoutButton/LogoutButton';
import { useMediaQuery } from 'react-responsive';

const BurgerMenuMobile = ({ setIsMenuOpen, isMenuOpen }) => {
  const { isLoggedIn } = useAuth();
  const isMobileScreen = useMediaQuery({ maxWidth: 767 });

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('lock-scroll');
    } else {
      document.body.classList.remove('lock-scroll');
    }

    return () => {
      document.body.classList.remove('lock-scroll');
    };
  }, [isMenuOpen]);

  return (
    <div className={css.BurgerMenuContainer}>
      <img
        src={!isMenuOpen ? burger : cross}
        alt="BurgerMenuIcon"
        onClick={handleMenuClick}
        className={css.BurgerMenu}
        width={24}
      />
      {isMenuOpen && (
        <div className={css.MenuContainer}>
          {isLoggedIn ? (
            <Profile showName={true} onItemClick={handleMenuItemClick} />
          ) : isMobileScreen ? (
            <AuthNav onItemClick={handleMenuItemClick} />
          ) : null}
          <Navigation onItemClick={handleMenuItemClick} />
          {isLoggedIn ? <LogoutButton /> : null}
        </div>
      )}
    </div>
  );
};

export default BurgerMenuMobile;
