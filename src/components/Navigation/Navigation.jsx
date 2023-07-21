import React from 'react';
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav >
      <ul className={css.navigation}>
        <li><a href="/news">News</a></li>
        <li><a href="/">Find pet</a></li>
        <li><a href="/page1">Our friends</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;