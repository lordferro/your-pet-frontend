import React from 'react';
import burger from '../../images/menu-hamburger.svg';
import Navigation from 'components/Navigation/Navigation';
import css from './BurgerMenu.module.css';

const BurgerMenu = ({ setIsMenuOpen, isMenuOpen }) => {
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
          <Navigation />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
