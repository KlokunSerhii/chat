import React from 'react';
import styles from './SingUp.module.css';
import Register from 'components/Register';
import { NavLink } from 'react-router-dom';
import Title from 'components/Title';

function RegisterViews() {
  return (
    <>
      <section className={styles.backGround}>
        <div className={styles.ContainetTitle}>
          <Title title={'Hello, sign up'} />
          <Register />
          <p className={styles.noaccount}>
            Don't have an account?
            <NavLink to="/login" className={styles.link}>
              Sign In
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
}

export default RegisterViews;
