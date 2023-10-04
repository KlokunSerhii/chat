import React from 'react';
import styles from './WelcomePage.module.css';
import { NavLink } from 'react-router-dom';
import Title from 'components/Title';

function WelcomPage() {
  return (
    <section className={styles.backGround}>
      <div className={styles.ContainetTitle}>
        <Title
          title={
            'Welcome to Chat-Lite, where you can chat with your friends'
          }
        />
        <div className={styles.btnContainer}>
          <NavLink
            className={styles.buttonIn}
            to={'/login'}
          >
            Sing In
          </NavLink>
          <NavLink
            className={styles.buttonUp}
            to={'/register'}
          >
            Sing Up
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default WelcomPage;
