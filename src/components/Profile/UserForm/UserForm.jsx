import { Field, Form, Formik } from 'formik';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
// import { SignupSchemaRegister } from '../../../options/validForm';

import { RiLockPasswordFill } from 'react-icons/ri';
import styles from './UserForm.module.css';
import { useDispatch } from 'react-redux';
import { refreshUser, updateUserData } from 'redux/auth/operations';
import { useAuth } from 'hooks/auth';

function UserForm() {
  const email = '';
  const password = '';
  const name = '';
  const dispatch = useDispatch();
  const { user } = useAuth();


  const handlerSubmit = async ({ email, password, name }) => {
    const avatarURL = user.avatarURL
     dispatch(updateUserData({email, password, name, avatarURL}))
     dispatch(refreshUser());

  };

  return (
    <Formik
      initialValues={{ email, password, name }}
      // validationSchema={SignupSchemaRegister}
      onSubmit={handlerSubmit}
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

        <label className={styles.label}>
          <Field
            className={styles.input}
            type="password"
            name="password"
            placeholder="enter your password"
            autoComplete="off"
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
