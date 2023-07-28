import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from './RegisterValidation';

import css from './RegisterForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    // Удаляем поле confirmPassword из объекта values
    const { confirmPassword, ...dataToSend } = values;
    
    dispatch(register(dataToSend));
    resetForm();
  };

  return (
    <div className={css.registration_container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.registration_form} autoComplete="off">
          <h2 className={css.registration_title}>Registration</h2>
          <div className={css.inputContainer}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.inputContainer}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className={css.input}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>
          <div className={css.inputContainer}>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className={css.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>
          <div className={css.inputContainer}>
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              className={css.input}
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className={css.error}
            />
          </div>
          <button type="submit" className={css.button}>
            Registration
          </button>
          <p className={css.refTitleToLogin}>
            Already have an account?{' '}
            <Link to="/login" className={css.refLogin}>
              Login
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
