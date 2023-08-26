import React from 'react';
import { CiLogin } from 'react-icons/ci';
import styles from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

function AuthNav() {
  return (
    <div className={styles.div}>
      <NavLink className={styles.navLink} to="/login">
        Login
        <CiLogin className={styles.icon} />
      </NavLink>
      <NavLink className={styles.navLink} to="/register">
        Registration
        <CiLogin className={styles.icon} />
      </NavLink>
    </div>
  );
}

export default AuthNav;
