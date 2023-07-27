import css from './BackgroundImg.module.css';

const BackgroundImg = ({ children }) => {
  return <div className={css.background}>{children}</div>;
};

export default BackgroundImg;
