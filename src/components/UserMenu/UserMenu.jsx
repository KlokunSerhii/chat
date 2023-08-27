import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../huks/auth';
import styles from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';
import imgDefault from '../../img/bot.jpg';
import { useLocation } from 'react-router-dom';
import { socket } from '../../options/socket';

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
    socket.emit('leftRoom', { params });
    dispatch(logout());
  };

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
        onClick={leftRoom}
      >
        Logout
      </button>
    </div>
  );
}

export default UserMenu;
