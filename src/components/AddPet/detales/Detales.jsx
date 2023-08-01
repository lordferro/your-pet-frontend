import css from './detales.module.css';
import React from 'react';
import { Field } from 'formik';

const Detales = ({ current, errors, values, touched }) => {
  if (errors) {
    if (values.name.length > 2) {
      errors.name = '';
    }
    if (values.date.length > 0) {
      errors.date = '';
    }
    if (values.type.length > 0) {
      errors.type = '';
    }
    if (values.title.length > 0) {
      errors.title = '';
    }
  }
  return (
    <div
      className={
        current === 2 || current === 3 ? css.detalesDiv2 : css.detalesDiv
      }
    >
      {current === 2 || current === 3 ? (
        <div className={css.inputWrap}>
          Title of add
          <Field
            placeholder="Title of add"
            className={css.input + ' ' + (errors.title ? css.errorInput : '')}
            type="text"
            name="title"
          />
          {errors.title ? (
            <div className={css.errorDiv}>{errors.title}</div>
          ) : null}
        </div>
      ) : null}
      <div className={css.inputWrap}>
        Pet’s Name
        <Field
          placeholder="Type name pet"
          className={css.input + ' ' + (errors.name ? css.errorInput : '')}
          type="text"
          name="name"
        />
        {errors.name ? <div className={css.errorDiv}>{errors.name}</div> : null}
      </div>

      <div className={css.inputWrap}>
        Date of birth
        <Field
          placeholder="Type date of birth"
          className={css.input + ' ' + (errors.date ? css.errorInput : '')}
          type="date"
          name="date"
        />
        {errors.date ? <div className={css.errorDiv}>{errors.date}</div> : null}
      </div>

      <div className={css.inputWrap}>
        Type
        <Field
          placeholder="Type of pet"
          className={css.input + ' ' + (errors.type ? css.errorInput : '')}
          type="text"
          name="type"
        />
        {errors.type && touched.type ? (
          <div className={css.errorDiv}>{errors.type}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Detales;
