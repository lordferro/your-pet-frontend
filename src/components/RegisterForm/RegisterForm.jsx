import React from 'react';
import css from './RegisterForm.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.registration_container}>
      <form
        className={css.registration_form}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className={css.registration_title}>Registration</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={css.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={css.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={css.input}
        />
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
