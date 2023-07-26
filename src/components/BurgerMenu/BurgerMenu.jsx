import React, { useState } from 'react';
import burger from '../../images/burger.svg';
import Navigation from 'components/Navigation/Navigation';

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
        style={{ width: '24px', height: '24px', cursor: 'pointer' }}
      />
      {isOpen && <Navigation />}
    </div>
  );
};

export default BurgerMenu;
