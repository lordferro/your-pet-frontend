import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        <p className={css.text}>
          It would be great if you like to support
          <a className={css.link} href="https://u24.gov.ua/" target="_blanc">
            Ukraine
          </a>
          and
          <a
            className={css.link}
            href="https://uanimals.org/how-to-help/"
            target="_blanc"
          >
            Ukrainian animals
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
