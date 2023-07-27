import { useState, useEffect } from 'react';
import FriendsCards from '../components/OurFriends/FriendsCards';
import fetchFriends from '../services/friends';
import Loader from '../components/Loader/Loader';

import css from '../styles/OurFriendsPage.module.css';

import BackgroundColor from '../components/shared/BackgroundColor';

export default function OurFriendsPage() {
  const [friends, setFriends] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchFriends()
      .then(response => {
        setFriends(response);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BackgroundColor>
      <div className={css.container}>
        <h1 className={css.title}>Our Friends</h1>
        {friends.length > 0 && <FriendsCards sponsors={friends} />}
      </div>
    </BackgroundColor>
  );
}
