import React from 'react';
import css from './Navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = ({ onItemClick }) => {
  const location = useLocation();

  return (
    <nav>
      <ul className={css.navigation}>
        <li className={css.navigation_link}>
          <NavLink
            to="/news"
            className={location.pathname === '/news' ? css.activeLink : ''}
            onClick={onItemClick}
          >
            News
          </NavLink>
        </li>
        <li className={css.navigation_link}>
          <NavLink
            to="/notices/sell"
            className={
              location.pathname === '/notices/sell' ? css.activeLink : ''
            }
            onClick={onItemClick}
          >
            Find pet
          </NavLink>
        </li>
        <li className={css.navigation_link}>
          <NavLink
            to="/friends"
            className={location.pathname === '/friends' ? css.activeLink : ''}
            onClick={onItemClick}
          >
            Our Friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
