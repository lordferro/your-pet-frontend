import React, { useState } from 'react';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
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
    date: Yup.string().required(),
    type: Yup.string().required(),
  }),
  current2: Yup.object().shape({
    name: Yup.string().required(),
    date: Yup.string().required(),
    type: Yup.string().required(),
    title: Yup.string().required(),
  }),
  current3: Yup.object().shape({
    name: Yup.string().required(),
    date: Yup.string().required(),
    type: Yup.string().required(),
    title: Yup.string().required(),
  }),
  current4: Yup.object().shape({
    name: Yup.string().required(),
    date: Yup.string().required(),
    type: Yup.string().required(),
    title: Yup.string().required(),
  }),
};
const addPet = createAsyncThunk('/pets', async (detales, thunkAPI) => {
  try {
    const res = await axios.post('/pets', detales);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const AddPet = () => {
  const [step, setStep] = useState(1);
  const [current, setCurrent] = useState(1);
  const [error, setError] = useState({});
  const [avatar, setAvatar] = useState({});
  const [action, setAction] = useState('your pet');
  const [detales, setDetaes] = useState({
    _id: '',
    action: '',
    name: '',
    date: '',
    comments: '',
    petAvatar: '',
    title: '',
    type: '',
    location: '',
    price: '',
    sex: '',
  });
  const navigate = useNavigate();
  function submit({ resetForm }) {
    if (step === 4) {
      detales.action = action;
      detales.petAvatar = avatar;
      detales._id = nanoid();
      addPet(detales);

      navigate('/user');
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
            (current === 2 && step === 3) || (current === 3 && step === 3)
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
            <h1 className={css.formTitle}> Pet in good hands</h1>
          ) : null}

          <ProgressBar step={step} current={current}></ProgressBar>

          {step === 1 ? (
            <Option
              setAction={setAction}
              setError={setError}
              setOption={SetOption}
              current={current}
              touched={touched}
            ></Option>
          ) : null}

          {step === 2 ? (
            <Detales
              current={current}
              errors={error}
              values={values}
              touched={touched}
            ></Detales>
          ) : null}

          {step === 3 ? (
            <More
              values={values}
              errors={error}
              current={current}
              setAvatar={setAvatar}
            ></More>
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
          ></FormBtn>
        </Form>
      )}
    </Formik>
  );
};

export default AddPet;
