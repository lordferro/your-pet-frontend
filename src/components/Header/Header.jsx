import React from 'react';
import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';

const Header = () => {
  return (
    <header className={css.header}>
      <Logo className={css.logo}/>
      <Navigation className={css.navigation}/>
      <AuthNav className={css.buttons}/>
    </header>
  );
};

export default Header;
