import { useState, useEffect } from 'react';
import FriendsCards from '../components/OurFriends/FriendsCards';
import fetchFriends from '../services/friends';

import css from '../styles/OurFriendsPage.module.css';
// import sponsors from '../sponsors.json';

import BackgroundColor from '../components/shared/BackgroundColor';

export default function OurFriendsPage() {
  const [friends, setFriends] = useState();
  // console.log(fetchFriends);

  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    const res = fetchFriends()
    console.log(res)
      // .then(response => {
      //   // console.log(response);
      //   setFriends(response);
      // })
      // .catch(error => {
      //   console.log(error);
      // });
    // .finally(setIsLoading(false));
  }, []);

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <BackgroundColor>
      <div className={css.container}>
        <h1 className={css.title}>Our Friends</h1>
        {/* <FriendsCards sponsors={friends} /> */}
      </div>
    </BackgroundColor>
  );
}
