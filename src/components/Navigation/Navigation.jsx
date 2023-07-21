import React from 'react';
import css from './Navigation.module.css';
// import NewsPage from 'pages/NewsPage';
// import OurFriendsPage from 'pages/OurFriendsPage';
// import NoticesPage from 'pages/NoticesPage';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigation}>
      <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/notices">Find pet</Link>
        </li>
        <li>
          <Link to="/friends">Our Friends</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
