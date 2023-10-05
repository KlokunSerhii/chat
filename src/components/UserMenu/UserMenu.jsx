import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/auth';
import styles from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';
import imgDefault from '../../img/bot.jpg';
import { NavLink, useLocation } from 'react-router-dom';
import { socket } from '../../options/socket';
import { RxExit } from 'react-icons/rx';

function UserMenu() {
  const [params, setParams] = useState({
    room: '',
    user: '',
    avatar: imgDefault,
  });
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    const searchParams = Object.fromEntries(
      new URLSearchParams(search)
    );
    setParams(searchParams);
  }, [search]);

  const leftRoom = () => {
    if (!params) {
      socket.emit('leftRoom', { params });
    }
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <span className={styles.span}>
        <p className={styles.name_title}>Hello,</p>
        <NavLink
          to={`/profile`}
          onClick={() =>
            socket.emit('leftRoom', { params })
          }
          className={styles.UserProfile}
        >
          <img
            className={styles.avatar}
            src={user.avatarURL}
            alt="avatar"
          />
          {user.name}
        </NavLink>
      </span>
      <button
        className={styles.buttonIn}
        type="button"
        onClick={leftRoom}
      >
        Logout
        <RxExit className={styles.icon} />
      </button>
    </div>
  );
}

export default UserMenu;
