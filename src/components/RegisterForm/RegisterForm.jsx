import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from './RegisterValidation';
import eyeclosed from '../../images/eye-closed.svg';
import eyeopen from '../../images/eye-open.svg';
import smallCross from '../../images/cross-small.svg';
import check from '../../images/check.svg';

import css from './RegisterForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSubmit = (values, { resetForm, setErrors, setSubmitting }) => {
    const { confirmPassword, ...dataToSend } = values;
    dispatch(register(dataToSend))
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        setSubmitting(false);
        setErrors(error.response.data);
      });
  };

  const handlePasswordEyeClick = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleConfirmPasswordEyeClick = () => {
    setConfirmPasswordVisible((prevState) => !prevState);
  };

  const handleEmailClearClick = (setFieldValue) => {
    setFieldValue('email', '');
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
        {({ values, errors, touched, setFieldValue }) => (
          <Form className={css.registration_form} autoComplete="off">
            <h2 className={css.registration_title}>Registration</h2>
            <div className={css.inputContainer}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={`${css.input} ${
                  touched.name && errors.name && css.errorInput
                } ${!errors.name && touched.name && css.successInput}`}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>
            <div className={css.inputContainer}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={`${css.input} ${
                  touched.email && errors.email && css.errorInput
                } ${!errors.email && touched.email && css.successInput}`}
              />
              {touched.email && errors.email ? (
                <img
                  src={smallCross}
                  alt="small cross"
                  className={css.imageCross}
                  onClick={() => handleEmailClearClick(setFieldValue)}
                />
              ) : !errors.email && touched.email ? (
                <img src={check} alt="check" className={css.imageCheck} />
              ) : null}
              <ErrorMessage name="email" component="div" className={css.error} />
            </div>

            <div className={css.inputContainer}>
              <div style={{ position: 'relative' }}>
                <Field
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className={`${css.input} ${
                    touched.password && errors.password && css.errorInput
                  } ${!errors.password && touched.password && css.successInput}`}
                />
                <img
                  src={passwordVisible ? eyeopen : eyeclosed}
                  alt={passwordVisible ? 'eye open' : 'eye closed'}
                  className={css.imageEye}
                  onClick={handlePasswordEyeClick}
                />
              </div>
              {touched.password && !errors.password && (
                <div className={css.successMessage}>Password is secured</div>
              )}
              <ErrorMessage name="password" component="div" className={css.error} />
            </div>

            <div className={css.inputContainer}>
              <div style={{ position: 'relative' }}>
                <Field
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className={`${css.input} ${
                    touched.confirmPassword && errors.confirmPassword && css.errorInput
                  } ${!errors.confirmPassword && touched.confirmPassword && css.successInput}`}
                />
                <img
                  src={confirmPasswordVisible ? eyeopen : eyeclosed}
                  alt={confirmPasswordVisible ? 'eye open' : 'eye closed'}
                  className={css.imageEye}
                  onClick={handleConfirmPasswordEyeClick}
                />
              </div>
              <ErrorMessage name="confirmPassword" component="div" className={css.error} />
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
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
