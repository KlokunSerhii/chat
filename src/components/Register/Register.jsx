import React, { useRef } from 'react';
import {Formik, Form } from 'formik';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { SignupSchemaRegister } from '../../options/validForm';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './Register.module.css';
import FormField from 'components/FormField/FormField';


function Register() {
  const email = '';
  const password = '';
  const name = '';
  const dispatch = useDispatch();
  const formik = useRef();

  const handleSubmitR = (
    { email, password, name },
    { resetForm }
  ) => {
    dispatch(register({ email, password, name }));
    resetForm();
  };

  return (
    <Formik
    innerRef={formik}
    initialValues={{ name, email, password }}
    validationSchema={SignupSchemaRegister}
    onSubmit={handleSubmitR}
  >
     {({ handleChange, handleSubmit, errors }) => (
      <Form className={styles.form}>
        <label className={styles.label}>
          <FormField
            className={styles.input}
            type="text"
            name="name"
            placeholder="enter your name"
            autoComplete="off"
          />
          <AiOutlineUser className={styles.iconUser} />
        </label>
        <label className={styles.label}>
        <FormField
              type="email"
              name="email"
              placeholder="enter your email"
              onChange={handleChange}
              autoComplete="off"
            />
          <MdOutlineEmail className={styles.iconEmail} />
        </label>
        <label className={styles.label}>
        <FormField
              type="password"
              name="password"
              placeholder="enter your"
              onChange={handleChange}
              autoComplete="off"
            />
          <RiLockPasswordFill
            className={styles.iconPassword}
          />
        </label>
        <button className={styles.buttonUp} type="submit">
          SingUp
        </button>
      </Form>
     )}
    </Formik>
  );
}

export default Register;
