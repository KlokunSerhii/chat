import React from 'react';
import { ErrorMessage, Formik, Field, Form } from 'formik';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { SignupSchemaRegister } from '../../options/validForm';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './Register.module.css';
function Register() {
  const email = '';
  const password = '';
  const name = '';
  const dispatch = useDispatch();

  const handleSubmitR = (
    { email, password, name },
    { resetForm }
  ) => {
    dispatch(register({ email, password, name }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email, password, name }}
      validationSchema={SignupSchemaRegister}
      onSubmit={handleSubmitR}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <Field
            className={styles.input}
            type="text"
            name="name"
            placeholder="enter your name"
            autoComplete="off"
          />
          <AiOutlineUser className={styles.iconUser} />
        </label>

        <ErrorMessage
          name="name"
          render={() => (
            <div className={styles.errorMessage}>
              {'Please enter your email'}
            </div>
          )}
        />
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

        <button className={styles.buttonUp} type="submit">
          SingUp
        </button>
      </Form>
    </Formik>
  );
}

export default Register;
