import css from './Auth.module.css';
import pawprint1 from '../../images/pawprint1.svg';

export const AuthNav = () => {

  const handleLoginClick = () => {
    console.log('Log IN button clicked!');
  };
  return (
    <div>
      <div className={css.AuthNavContainer}>
        <button type="button" className={css.buttonLogin} onClick={handleLoginClick}>
          Log IN
          <img src={pawprint1} alt="pawprint" width={24} height={21} />
        </button>
        <button type='button' className={css.buttonReg}>Registration</button>
      </div>
    </div>
  );
};
