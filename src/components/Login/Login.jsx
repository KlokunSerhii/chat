import React, { useRef, useState } from 'react';
import {Formik, Form } from 'formik';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import symbolDefs from '../../img/symbol-defs.svg';

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
  const [eye, setEye] = useState(false);
  const [typePas, setTypePas] = useState("password")

  const handleSubmitLogin = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };
  const handlerEye = () => {
    setEye(!eye);
    !eye ? setTypePas("text") : setTypePas("password")

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
              type={typePas}
              name="password"
              placeholder="enter your"
              onChange={handleChange}
              autoComplete="off"
            />
            <RiLockPasswordFill className={styles.iconPassword} />
            {!eye && (
              <button
                className={styles.btnEyeOffIcon}
                type="buttun"
                onClick={handlerEye}
              >
                <svg className={styles.eyeOffIcon}>
                  <use
                    href={symbolDefs + '#eye-off-icon'}
                    width="16"
                    height="16"
                  ></use>
                </svg>
              </button>
            )}

            {eye && (
              <button
                className={styles.btnEyeIcon}
                type="buttun"
                onClick={handlerEye}
              >
                <svg className={styles.eyeIcon}>
                  <use
                    href={symbolDefs + '#eye-icon'}
                    width="16"
                    height="16"
                  ></use>
                </svg>
              </button>
            )}
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
