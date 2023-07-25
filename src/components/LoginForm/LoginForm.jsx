import React from 'react';
import css from './Login.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.login_container}>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={css.login_form}
      >
        <h2 className={css.login_title}>Login</h2>
        <input type="email" name="email" placeholder="Email" className={css.input} />
        <input type="password" name="password" placeholder="Password" className={css.input} />
        <button type="submit" className={css.button}>
          Login
        </button>
        <p className={css.refTitleToReg}>
          Don't have an account?{' '}
          <Link to="/register" className={css.refLogin}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
