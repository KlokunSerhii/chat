import React, { useRef, useState } from 'react';
import { Formik, Form } from 'formik';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';
import { SignupSchemaRegister } from '../../options/validForm';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './Register.module.css';
import FormField from 'components/FormField/FormField';
import symbolDefs from '../../img/symbol-defs.svg';

function Register() {
  const email = '';
  const password = '';
  const name = '';
  const dispatch = useDispatch();
  const formik = useRef();
  const [eye, setEye] = useState(false);
  const [typePas, setTypePas] = useState("password")

  const handleSubmitR = (
    { email, password, name },
    { resetForm }
  ) => {
    dispatch(register({ email, password, name }));
    resetForm();
  };
  const handlerEye = () => {
    setEye(!eye);
    !eye ? setTypePas("text") : setTypePas("password")

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
          <button className={styles.buttonUp} type="submit">
            SingUp
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default Register;
