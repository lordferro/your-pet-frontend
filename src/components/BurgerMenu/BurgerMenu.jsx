import React, { useState } from 'react';
import burger from '../../images/menu-hamburger.svg';
import Navigation from 'components/Navigation/Navigation';
import css from "./BurgerMenu.module.css"

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <img
        src={burger}
        alt="BurgerMenuIcon"
        onClick={handleMenuClick}
        className={css.BurgerMenu}
        width={24}
      />
      {isOpen && <Navigation />}
    </div>
  );
};

export default BurgerMenu;
