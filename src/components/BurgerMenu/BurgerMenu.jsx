import React, { useState } from 'react';
import burger from '../../images/menu-hamburger.svg';
import Navigation from 'components/Navigation/Navigation';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
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
      {isOpen && (
        <div className={css.MenuContainer}>
          <Navigation />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
