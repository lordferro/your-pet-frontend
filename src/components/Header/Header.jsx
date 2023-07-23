import React from 'react';
import css from './Header.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
// import { AuthNav } from '../AuthNav/AuthNav';
import { UserNav } from 'components/UserNav/UserNav';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logoNav}>
        <Logo className={css.logo} />
        <Navigation />
      </div>
      {/* <AuthNav /> */}
      <UserNav/>
    </header>
  );
};

export default Header;
