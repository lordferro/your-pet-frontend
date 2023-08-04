import React, { useState } from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import ProgressBar from './progressBar/progressBar';
import Option from './optionTab/Option';
import FormBtn from './formButtons/formBtn';
import Details from './details/Details';
import More from './More/More';
import css from './AddPet.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNoticeThunk, addPetThunk } from 'redux/notices/operations';

const validationSchema = {
  current1: Yup.object().shape({
    name: Yup.string().min(2).max(16).required(),
    birthday: Yup.string().required(),
    type: Yup.string().required(),
  }),
  current2: Yup.object().shape({
    name: Yup.string().required(),
    birthday: Yup.string().required(),
    type: Yup.string().required(),
    title: Yup.string().required(),
  }),
  current3: Yup.object().shape({
    name: Yup.string().required(),
    birthday: Yup.string().required(),
    type: Yup.string().required(),
    title: Yup.string().required(),
  }),
  current4: Yup.object().shape({
    name: Yup.string().required(),
    birthday: Yup.string().required(),
    type: Yup.string().required(),
  }),
};
const AddPet = () => {
  const [step, setStep] = useState(1);
  const [current, setCurrent] = useState(1);
  const [error, setError] = useState({});
  const [avatar, setAvatar] = useState(null);
  const [action, setAction] = useState('my pet');
  const [details, setDetails] = useState({
    action: '',
    name: '',
    birthday: '',
    comments: '',
    petAvatar: '',
    title: '',
    type: '',
    location: '',
    price: '0',
    sex: '',
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();
  function submit() {
    if (step === 4) {
      const dateForSubmit =
        details.birthday.substr(8, 2) +
        '-' +
        details.birthday.substr(5, 2) +
        '-' +
        details.birthday.substr(0, 4);

      const formData = new FormData();
      formData.append('action', action);
      formData.append('name', details.name);
      formData.append('petAvatar', avatar);
      formData.append('type', details.type);
      formData.append('comments', details.comments);
      formData.append('birthday', dateForSubmit);

      if (current === 3 || current === 4) {
        formData.append('title', details.title);
        formData.append('sex', details.sex);
        formData.append('location', details.location);
      }

      if (current === 2) {
        formData.append('title', details.title);
        formData.append('sex', details.sex);
        formData.append('location', details.location);
        formData.append('price', details.price);
      }
      switch (current) {
        case 1:
          dispatch(addPetThunk(formData));
          navigate('/user');
          break;
        case 2:
          dispatch(addNoticeThunk(formData));
          navigate('/notices/sell');
          break;
        case 3:
          dispatch(addNoticeThunk(formData));
          navigate('/notices/lost-found');
          break;

        default:
          dispatch(addNoticeThunk(formData));
          navigate('/notices/for-free');
          break;
      }
    }
  }
  const SetOption = val => {
    setCurrent(val);
  };
  const HendleIncrementStep = () => {
    setStep(prev => prev + 1);
  };
  const HendleDecrementStep = () => {
    setStep(prev => prev - 1);
  };

  return (
    <Formik
      initialValues={details}
      validationSchema={validationSchema[`current${current}`]}
      onSubmit={submit}
    >
      {({ errors, touched, values }) => (
        <Form
          autoComplete="off"
          className={
            (current === 2 && step === 3) ||
            (current === 3 && step === 3) ||
            (current === 4 && step === 3)
              ? css.FormDivSale
              : css.FormDiv
          }
        >
          {step === 1 ? <h1 className={css.formTitle}>Add pet</h1> : null}
          {step > 1 && current === 1 ? (
            <h1 className={css.formTitle}>Add pet</h1>
          ) : null}
          {step > 1 && current === 2 ? (
            <h1 className={step === 3 ? css.formTitle1 : css.formTitle}>
              Add for sale
            </h1>
          ) : null}
          {step > 1 && current === 3 ? (
            <h1 className={step === 3 ? css.formTitle1 : css.formTitle}>
              Add lost pet
            </h1>
          ) : null}
          {step > 1 && current === 4 ? (
            <h1 className={step === 3 ? css.formTitle1 : css.formTitle}>
              {' '}
              Pet in good hands
            </h1>
          ) : null}

          <ProgressBar step={step} current={current}></ProgressBar>

          {step === 1 ? (
            <Option
              setAction={setAction}
              setError={setError}
              setOption={SetOption}
              current={current}
              touched={touched}
            />
          ) : null}

          {step === 2 ? (
            <Details
              current={current}
              errors={error}
              values={values}
              touched={touched}
            />
          ) : null}

          {step === 3 ? (
            <More
              values={values}
              errors={error}
              current={current}
              setAvatar={setAvatar}
            />
          ) : null}

          <FormBtn
            error={errors}
            hendeError={setError}
            onClickIncrement={HendleIncrementStep}
            onClickDecrement={HendleDecrementStep}
            step={step}
            values={values}
            setDetails={setDetails}
            current={current}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddPet;
