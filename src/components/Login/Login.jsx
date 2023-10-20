import React, { useRef } from 'react';
import {Formik, Form } from 'formik';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

import styles from './Login.module.css';
import { SignupSchemaLogin } from '../../options/validForm';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import FormField from 'components/FormField/FormField';

function Login() {
  const email = '';
  const password = '';
  const dispatch = useDispatch();
  const formik = useRef();

  const handleSubmitLogin = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };
  return (
    <Formik
      innerRef={formik}
      initialValues={{ email, password }}
      validationSchema={SignupSchemaLogin}
      onSubmit={handleSubmitLogin}
    >
      {({ handleChange, handleSubmit, errors }) => (
        <Form className={styles.form}>
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
            <RiLockPasswordFill className={styles.iconPassword} />
          </label>
          <button className={styles.buttonIn} type="submit">
            LogIn
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Login;
