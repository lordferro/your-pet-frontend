import css from './more.module.css';
import pluse from '../../../images/pluse.svg';

// import female from '../../../images/female.svg';
import React, { useState } from 'react';
import { Field } from 'formik';

const More = ({ values, errors, current, setAvatar }) => {
  const [file, setFile] = useState();
  const [sex] = useState({
    female: false,
    male: false,
  });

  const Female = () => {
    return (
      <svg
        id="female"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13ZM12 13L12 21M9 18L15 18"
          stroke={sex.female ? 'white' : sex.male ? '#888888' : '#F43F5E'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };
  const Male = () => {
    if (values.sex === 'male') {
      sex.male = true;
    } else if (values.sex === 'female') {
      sex.female = true;
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 11C9.23858 11 7 13.2386 7 16C7 18.7614 9.23858 21 12 21C14.7614 21 17 18.7614 17 16C17 13.2386 14.7614 11 12 11ZM12 11V3M12 3L16 7M12 3L8 7"
          stroke={sex.male ? 'white' : sex.female ? '#888888' : '#54ADFF'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  if (errors) {
    if (values.comments.length > 0) {
      errors.comments = '';
    }
  }

  const previewImage = e => {
    setAvatar(e.target.files[0]);
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const onFemaleClick = () => {
    document.querySelector('.female').click();
    sex.female = true;
    sex.male = false;
  };
  const onMaleClick = () => {
    document.querySelector('.male').click();
    sex.male = true;
    sex.female = false;
  };

  return (
    <div
      className={
        current === 2 || current === 3 || current === 4 ? css.maindiv : null
      }
    >
      <div>
        {current === 2 || current === 3 || current === 4 ? (
          <div>
            <span className={css.SexText}>The sex</span>
            <div className={css.inputRadioWrap}>
              <button
                type="button"
                className={
                  css.Btn +
                  ' ' +
                  (sex.male
                    ? css.BtnUchosden
                    : sex.female
                    ? css.BtnChusen
                    : null)
                }
                onClick={onFemaleClick}
              >
                <Female></Female>
                <label style={{ marginLeft: 12, cursor: 'pointer ' }}>
                  <Field
                    style={{ display: 'none' }}
                    className="female"
                    type="radio"
                    name="sex"
                    value="female"
                  />
                  Female
                </label>
              </button>
              <button
                type="button"
                className={
                  css.Btn +
                  ' ' +
                  (sex.female
                    ? css.BtnUchosden
                    : sex.male
                    ? css.BtnChusen
                    : null)
                }
                onClick={onMaleClick}
              >
                <Male></Male>
                <label style={{ marginLeft: 12, cursor: 'pointer ' }}>
                  <Field
                    style={{ display: 'none' }}
                    className="male"
                    type="radio"
                    name="sex"
                    value="male"
                  />
                  Male
                </label>
              </button>
            </div>
          </div>
        ) : null}

        <div
          className={
            current === 2 || current === 3 || current === 4
              ? css.inputFileWrap1
              : css.inputFileWrap
          }
        >
          <Field
            style={{ display: 'none' }}
            onChange={previewImage}
            type="file"
            name="petAvatar"
            className="fileUpload"
          />
          <span>Load the pet’s image:</span>
          <button
            type="button"
            className={css.inputBtn}
            onClick={() => document.querySelector('.fileUpload').click()}
          >
            <img
              className={css.img}
              src={file ? file : pluse}
              alt="Click for load"
            ></img>
          </button>

          {errors.image ? (
            <div className={css.errorDiv}>{errors.image}</div>
          ) : null}
        </div>
      </div>

      <div>
        {current === 2 ? (
          <div className={css.inputWrap1}>
            Price
            <Field
              placeholder="Price"
              className={
                css.input1 + ' ' + (errors.price ? css.errorInput : '')
              }
              type="number"
              name="price"
              step="100"
            />
            {errors.price ? (
              <div className={css.errorDiv}>{errors.price}</div>
            ) : null}
          </div>
        ) : null}

        {current === 2 || current === 3 || current === 4 ? (
          <div className={css.inputWrap1}>
            Location
            <Field
              placeholder="Location"
              className={
                css.input1 + ' ' + (errors.location ? css.errorInput : '')
              }
              type="text"
              name="location"
            />
            {errors.location ? (
              <div className={css.errorDiv}>{errors.location}</div>
            ) : null}
          </div>
        ) : null}

        <div className={css.inputWrap}>
          <span>Comments</span>
          <Field
            as="textarea"
            placeholder="Type of pet"
            className={
              current === 3 || current === 4
                ? css.input2
                : css.input + ' ' + (errors.comments ? css.errorInput : '')
            }
            type="text"
            name="comments"
          />
          {errors.comments ? (
            <div className={css.errorDiv}>{errors.comments}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default More;
