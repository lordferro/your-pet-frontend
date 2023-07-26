import * as Yup from 'yup';

export const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter your registered email')
      .required('Email is a required field')
      .matches(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Enter a valid Email'),
    password: Yup.string()
      .trim()
      .required('Password is a required field')
      .min(6, 'Password must be at least 6 characters')
      .max(16, 'Password must be no more than 16 characters'),
  });