import React from 'react';
import css from './Navigation.module.css';
import {NavLink } from 'react-router-dom';

const Navigation = () => {

  return (
    <nav>
      <ul className={css.navigation}>
      <li>
      <NavLink to="/news" >News</NavLink>
        </li>
        <li>
          <NavLink to="/notices">Find pet</NavLink>
        </li>
        <li>
          <NavLink to="/friends">Our Friends</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
