import React from 'react';
import css from './Login.module.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className={css.login_container}>
      <form className={css.login_form}>
        <h2 className={css.login_title}>Login</h2>
        <input type="email" placeholder="Email" className={css.input} />
        <input type="password" placeholder="Password" className={css.input} />
        <button type="submit" className={css.button}>
          Login
        </button>
        <p className={css.refTitleToReg}>
          Don't have an account?
          <Link to="/registration" className={css.refLogin}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
