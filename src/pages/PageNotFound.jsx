import { NavLink } from 'react-router-dom';
import { PiSmileySadThin, PiPawPrintLight } from 'react-icons/pi';
import css from '../styles/PageNotFound.module.css';

export default function PageNotFound() {
  return (
    //додати компонент з фоном з лапками, коли буде готовий
    <div className={css.container}>
      <h1 className={css.title}>
        <span>Ooops!</span>
        <span>
          This page not found <PiSmileySadThin />
        </span>
      </h1>
      <div className={css.img}></div>
      <NavLink to="/" className={css.button}>
        To main page <PiPawPrintLight className={css.icon} />
      </NavLink>
    </div>
  );
}
