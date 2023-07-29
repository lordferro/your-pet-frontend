import css from './Auth.module.css';
import pawprint1 from '../../images/pawprint1.svg';
import { Link } from 'react-router-dom';

export const AuthNav = ({ onItemClick }) => {
  return (
    <div>
      <div className={css.AuthNavContainer}>
        <Link to="/login" onClick={onItemClick}  className={css.link}>
          <button className={css.buttonLogin}>
            Log IN
            <img
              src={pawprint1}
              alt="pawprint"
              width={24}
              height={21}
              className={css.imageLogin}
            />
          </button>
        </Link>
        <Link to="/register" onClick={onItemClick} className={css.link}>
          <button className={css.buttonReg}>Registration</button>
        </Link>
      </div>
    </div>
  );
};
