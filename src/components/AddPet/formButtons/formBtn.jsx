import React from 'react';
import pawprint from '../../../images/pawprint1.svg';
import arr from '../../../images/arrow.svg';
import css from './formBtn.module.css';
const FormBtn = ({
  onClickIncrement,
  onClickDecrement,
  step,
  error,
  hendeError,
  values,
  setDetaes,
  current,
}) => {
  const onSub = () => {
    if (values.comments === '') {
      const err = { comments: 'comments is a required field' };
      hendeError(err);
    } else {
      console.log(values);

      setDetaes(values);
      increese();
    }
  };

  const increese = () => {
    onClickIncrement();
  };

  const errorCheck = () => {
    if (error) {
      hendeError(error);
    }
    if (
      (current === 1 || current === 4) &&
      values.date.length > 0 &&
      values.name.length > 0 &&
      values.type.length > 0
    ) {
      onClickIncrement();
    } else if (
      (current === 2 || current === 3) &&
      values.title.length > 0 &&
      values.date.length > 0 &&
      values.name.length > 0 &&
      values.type.length > 0
    ) {
      onClickIncrement();
    }
  };

  return (
    <div className={css.buttonDiv}>
      {step === 3 ? (
        <button type="submit" className={css.nextBtn} onClick={onSub}>
          Done
          <img src={pawprint} alt="pawprint"></img>
        </button>
      ) : (
        <button
          type="submit"
          className={css.nextBtn}
          onClick={step === 1 ? increese : step === 2 ? errorCheck : null}
        >
          Next
          <img src={pawprint} alt="pawprint"></img>
        </button>
      )}

      {step === 1 ? (
        <button type="button" className={css.backBtn}>
          <img src={arr} alt="arrow"></img>
          Сancel
        </button>
      ) : (
        <button
          type="button"
          className={css.backBtn}
          onClick={onClickDecrement}
        >
          <img src={arr} alt="arrow"></img>
          Back
        </button>
      )}
    </div>
  );
};

export default FormBtn;
