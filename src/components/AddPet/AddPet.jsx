import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import ProgressBar from './progressBar/progressBar';
import Option from './optionTab/Option';
import FormBtn from './formButtons/formBtn';
import Detales from './detales/Detales';
import More from './More/More';
import css from './AddPet.module.css';
import { useNavigate } from 'react-router-dom';

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

const addPet = async detales => {
  try {
    const res = await axios.post('/pets', detales);
    console.log('addpet' + res);
    return res.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
const AddPet = () => {
  const [step, setStep] = useState(1);
  const [current, setCurrent] = useState(1);
  const [error, setError] = useState({});
  const [avatar, setAvatar] = useState(null);
  const [action, setAction] = useState('my pet');
  const [detales, setDetaes] = useState({
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

  const navigate = useNavigate();
  function submit() {
    if (step === 4) {
      const dateForSubmit =
        detales.birthday.substr(8, 2) +
        '-' +
        detales.birthday.substr(5, 2) +
        '-' +
        detales.birthday.substr(0, 4);

      const formData = new FormData();
      formData.append('action', action);
      formData.append('name', detales.name);
      formData.append('petAvatar', avatar);
      formData.append('type', detales.type);
      formData.append('comments', detales.comments);
      formData.append('birthday', dateForSubmit);

      if (current === 3 || current === 4) {
        formData.append('title', detales.title);
        formData.append('sex', detales.sex);
        formData.append('location', detales.location);
      }

      if (current === 2) {
        console.log(detales.sex);
        formData.append('title', detales.title);
        formData.append('sex', detales.sex);
        formData.append('location', detales.location);
        formData.append('price', detales.price);
      }
      addPet(formData);
      if (current === 1) {
        navigate('/user');
      } else navigate('/notices/own');

      console.log('sucsess');
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
      initialValues={detales}
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
            <Detales
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
            setDetaes={setDetaes}
            current={current}
          />
        </Form>
      )}
    </Formik>
  );
};

export default AddPet;
