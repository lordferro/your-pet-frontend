import React from 'react';
import css from './Navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <NavLink to="/news" className={location.pathname === "/news" ? css.activeLink : ""}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/notices" className={location.pathname === "/notices" ? css.activeLink : ""}>
            Find pet
          </NavLink>
        </li>
        <li>
          <NavLink to="/friends" className={location.pathname === "/friends" ? css.activeLink : ""}>
            Our Friends
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
