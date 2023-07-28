import React, { useEffect } from 'react';
import burger from '../../../images/menu-hamburger.svg';
import Navigation from 'components/Navigation/Navigation';
import css from '../BurgerMenu.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks';
import LogoutButton from 'components/UserNav/LogoutButton/LogoutButton';

const BurgerMenuTablet = ({ setIsMenuOpen, isMenuOpen, isMobile }) => {
  const { isLoggedIn } = useAuth();

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
        src={burger}
        alt="BurgerMenuIcon"
        onClick={handleMenuClick}
        className={css.BurgerMenu}
        width={24}
      />
      {isMenuOpen && (
        <div className={css.MenuContainer}>
          {isMobile ? (
            <>
              {isLoggedIn && <AuthNav onItemClick={handleMenuItemClick} />}
              <Navigation onItemClick={handleMenuItemClick} />
              {isLoggedIn && <LogoutButton onItemClick={handleMenuItemClick} />}
            </>
          ) : (
            <Navigation onItemClick={handleMenuItemClick} />
          )}
        </div>
      )}
    </div>
  );
};

export default BurgerMenuTablet;
