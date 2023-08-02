import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from './LoginValidation';
import eyeclosed from '../../images/eye-closed.svg';
import eyeopen from '../../images/eye-open.svg';
import smallCross from '../../images/cross-small.svg';
import check from '../../images/check.svg';
import css from './LoginForm.module.css';
import BackgroundImg from 'components/shared/BackgroundImg';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  const handleEyeClick = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return (
    <BackgroundImg> <div className={css.login_container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className={css.login_form} autoComplete="off">
            <h2 className={css.login_title}>Login</h2>
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
                  onClick={() => setFieldValue('email', '')}
                />
              ) : !errors.email && touched.email ? (
                <img src={check} alt="check" className={css.imageCheck} />
              ) : null}
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
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
                {touched.password && (errors.password || !values.password) && (
                  <img
                    src={smallCross}
                    alt="small cross"
                    className={css.imageCross}
                    onClick={() => setFieldValue('password', '')}
                  />
                )}
                {touched.password && !errors.password && (
                  <img
                    src={check}
                    alt="check"
                    className={css.imageCheck}
                  />
                )}
                <img
                  src={passwordVisible ? eyeopen : eyeclosed}
                  alt="toggle password visibility"
                  className={css.imageEye}
                  style={
                    touched.password
                      ? { right: '40px' }
                      : {}
                  }
                  onClick={handleEyeClick}
                />
              </div>
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
    </div></BackgroundImg>
   
  );
};

export default LoginForm;
