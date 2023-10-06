import { Field, Form, Formik } from 'formik';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { SignupSchemaRegister } from '../../../options/validForm';
import Notiflix from 'notiflix';

import { RiLockPasswordFill } from 'react-icons/ri';
import styles from './UserForm.module.css';
import { useDispatch } from 'react-redux';
import { refreshUser, updateUserData } from 'redux/auth/operations';
import { useAuth } from 'hooks/auth';
import { useState } from 'react';
import { options } from 'options/configMessage';


function UserForm() {
  const email = '';
  const password = '';
  const name = '';
  const password2 = '';
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [className, setClassName] = useState(styles.input)
  const message = Notiflix.Notify;



  const handlerSubmit = async ({ email, password, password2, name }, { resetForm }) => {
    setClassName(password !== password2 ? styles.inputNoValid : styles.input)
    if(password === password2){  
      const avatarURL = user.avatarURL;
      dispatch(updateUserData({ email, password, name, avatarURL }));
      dispatch(refreshUser());
      resetForm()
      message.success(
        "Your details have been updated",
        options
      );
      return
    }
    message.failure(
      "Sorry, the passwords don't match",
      options
    );


  };

  return (
    <Formik
      initialValues={{ email, password, password2, name }}
      validationSchema={SignupSchemaRegister}
      onSubmit={handlerSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          <Field
            className={styles.input}
            type="text"
            name="name"
            placeholder={user.name}
          />
          <AiOutlineUser className={styles.iconUser} />
        </label>
        <label className={styles.label}>
          <Field
            className={styles.input}
            type="email"
            name="email"
            placeholder={user.email}
          />
          <MdOutlineEmail className={styles.iconEmail} />
        </label>

        <label className={styles.label}>
          <Field
            className={className}
            type="text"
            name="password"
            placeholder='Change your password'
          />
          <RiLockPasswordFill className={styles.iconPassword} />
        </label>

        <label className={styles.label}>
          <Field
            className={className}
            type="text"
            name="password2"
            placeholder='Repeat the password'
          />
          <RiLockPasswordFill className={styles.iconPassword} />
        </label>


        <button className={styles.buttonUp} type="submit">
          Save
        </button>
      </Form>
    </Formik>
  );
}

export default UserForm;
