import React from 'react';

import { useDispatch } from 'react-redux';
import { useAuth } from '../../huks/auth';
import styles from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={styles.container}>
      <span className={styles.span}>
        <p>Hello,</p>
        <img
          className={styles.avatar}
          src={user.avatarURL}
          alt="avatar"
        />
        <p className={styles.name}> {user.name}</p>
      </span>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
