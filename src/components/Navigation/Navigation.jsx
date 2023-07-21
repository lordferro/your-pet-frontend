import React from 'react';
import css from './Navigation.module.css'
import NewsPage from 'pages/NewsPage';
import OurFriendsPage from 'pages/OurFriendsPage';
import NoticesPage from 'pages/NoticesPage';

const Navigation = () => {
  return (
    <nav >
      <ul className={css.navigation}>
        <NewsPage/>
        <NoticesPage/>
        <OurFriendsPage/>
      </ul>
    </nav>
  );
};

export default Navigation;