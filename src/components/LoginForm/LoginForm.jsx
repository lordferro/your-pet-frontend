import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from './LoginValidation';

import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <div className={css.login_container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.login_form} autoComplete="off">
            <h2 className={css.login_title}>Login</h2>
            <div className={css.inputContainer}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={`${css.input} ${touched.email && errors.email && css.errorInput}`}
              />
              <ErrorMessage name="email" component="div" className={css.error} />
            </div>
            <div className={css.inputContainer}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={`${css.input} ${touched.password && errors.password && css.errorInput}`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={css.error}
              />
            </div>
            <button type="submit" className={css.button}>
              Login
            </button>
            <p className={css.refTitleToReg}>
              Don't have an account?{' '}
              <Link to="/register" className={css.refLogin}>
                Register
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
