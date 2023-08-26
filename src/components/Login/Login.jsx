import React from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

import styles from './Login.module.css';
import { SignupSchemaLogin } from '../../options/validForm';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

function Login() {
  const email = '';
  const password = '';
  const dispatch = useDispatch();

  const handleSubmitLogin = (
    { email, password },
    { resetForm }
  ) => {
    dispatch(login({ email, password }));
    resetForm();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Glad to see you again :)
      </h1>
      <Formik
        initialValues={{ email, password }}
        validationSchema={SignupSchemaLogin}
        onSubmit={handleSubmitLogin}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <Field
              className={styles.input}
              type="email"
              name="email"
              placeholder="enter your email"
              autoComplete="off"
            />
            <MdOutlineEmail className={styles.iconEmail} />
          </label>
          <ErrorMessage
            name="email"
            render={() => (
              <div className={styles.errorMessage}>
                {'Please enter your email'}
              </div>
            )}
          />

          <label className={styles.label}>
            <Field
              className={styles.input}
              type="password"
              name="password"
              placeholder="enter your"
              autoComplete="off"
            />
            <RiLockPasswordFill
              className={styles.iconPassword}
            />
          </label>
          <ErrorMessage
            name="password"
            render={() => (
              <div className={styles.errorMessage}>
                {'Please enter your password'}
              </div>
            )}
          />
          <button className={styles.button} type="submit">
            LogIn
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
