import React, { useState } from 'react';
import styles from './BurgerMenu.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { RiCloseFill } from 'react-icons/ri';
import { useEffect } from 'react';
import imgDefault from '../../../img/bot.jpg';
import { socket } from 'options/socket';

function BurgerMenu({ leftRoom, active, setActive }) {
  const [params, setParams] = useState({
    room: '',
    user: '',
    avatar: imgDefault,
  });
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = Object.fromEntries(
      new URLSearchParams(search)
    );
    setParams(searchParams);
  }, [search]);

  const LogOutBtn = () => {
    leftRoom();
    setActive(false);
  };

  const closeMenu = () => {
    setActive(false);
  };

  const handleEscape = event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  };

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (active) {
      return window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const leftRoomMob = () => {
    closeMenu();
    if (!params) {
      socket.emit('leftRoom', { params });
    }
  };

  return (
    <>
      {active && (
        <div className={styles.backdrop} onClick={closeMenu}></div>
      )}
      <div
        className={
          active
            ? [styles.menu, styles.active].join(' ')
            : [styles.menu]
        }
        onClick={handleBackdrop}
      >
        <div
          className={styles.wrapNav}
          onClick={e => e.stopPropagation()}
        >
          <NavLink
            className={styles.navItem}
            to="/join"
            onClick={leftRoomMob}
          >
            Join
          </NavLink>
          <NavLink
            className={styles.navItem}
            to="/profile"
            onClick={leftRoomMob}
          >
            Profile
          </NavLink>
        </div>
        <NavLink className={styles.btnLogout} onClick={LogOutBtn}>
          <div className={styles.btnText}>Logout</div>
          <MdLogout className={styles.btnIcon} />
        </NavLink>
        <button className={styles.closeBtn} onClick={closeMenu}>
          <RiCloseFill className={styles.closeIcon} />
        </button>
      </div>
    </>
  );
}

export default BurgerMenu;
