import React from 'react';
import css from './RegisterForm.module.css';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <div className={css.registration_container}>
      <form className={css.registration_form}>
        <h2 className={css.registration_title}>Registration</h2>
        <input type="text" placeholder="Name" className={css.input} />
        <input type="email" placeholder="Email" className={css.input} />
        <input type="password" placeholder="Password" className={css.input} />
        <input
          type="password"
          placeholder="Confirm password"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Registration
        </button>
        <p className={css.refTitleToLogin}>
          Already have an account?{' '}
          <Link to="/login" className={css.refLogin}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
