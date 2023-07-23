import FriendsCards from '../components/OurFriends/FriendsCards';
import css from '../styles/OurFriendsPage.module.css';
import sponsors from '../sponsors.json';

export default function OurFriendsPage() {
  return (
    //додати однотонний фон, коли буде готовий компонент
    <div className={css.container}>
      <h1 className={css.title}>Our Friends</h1>
      <FriendsCards sponsors={sponsors} />
    </div>
  );
}
