import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/auth';
import styles from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';
import imgDefault from '../../img/bot.jpg';
import { NavLink, useLocation } from 'react-router-dom';
import { socket } from '../../options/socket';
import { Button } from 'react-bootstrap';

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
          onClick={() => socket.emit('leftRoom', { params })}
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
      <NavLink
        to={'/profile'}
        onClick={() => socket.emit('leftRoom', { params })}
        className={styles.UserProfileMobile}
      >
        Profile
      </NavLink>
      <Button
        variant="link"
        className={styles.btnMobile}
        onClick={leftRoom}
        size="sm"
      >
        Logout
      </Button>
      <Button
        variant="outline-light"
        onClick={leftRoom}
        className={styles.btn}
        size="sm"
      >
        Logout
      </Button>
    </div>
  );
}

export default UserMenu;
