import css from './BackgroundColor.module.css';

const BackgroundColor = ({ children }) => {
  return <div className={css.background}>{children}</div>;
};

export default BackgroundColor;
