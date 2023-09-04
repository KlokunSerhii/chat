import React, { useEffect, useState } from 'react';
import styles from '../Chat/Chat.module.css';

import { socket } from '../../options/socket';

function RoomList({ isOpen, params }) {
  const [users, setUsers] = useState(0);
  const [userList, setUserList] = useState('');

  useEffect(() => {
    socket.on('room', ({ data: { users } }) => {
      setUsers(users.length);
      setUserList(users);
    });
  }, []);

  return (
    <>
      <div className={styles.containerRoom}>
        <div className={styles.roomOnline}>
          <p className={styles.room}>Room: {params.room}</p>
          <p className={styles.users}>
            Users online: {users}
          </p>
        </div>
        <ul className={styles.roomList}>
          {userList &&
            userList.map(({ name, avatar }, i) => (
              <li key={i} className={styles.roomItem}>
                <img
                  className={styles.avatarRoom}
                  src={avatar}
                  alt="avatar"
                />
                <p className={styles.nameYou}>{name}</p>
              </li>
            ))}
        </ul>
      </div>
      {isOpen && (
        <div className={styles.containerRoomMobile}>
          <div className={styles.roomOnlineMobile}>
            <p className={styles.roomMobile}>
              Room: {params.room}
            </p>
            <p className={styles.usersMobile}>
              Users online: {users}
            </p>
          </div>
          <ul className={styles.roomList}>
            {userList &&
              userList.map(({ name, avatar }, i) => (
                <li
                  key={i}
                  className={styles.roomItemMobile}
                >
                  <img
                    className={styles.avatarRoom}
                    src={avatar}
                    alt="avatar"
                  />
                  <p className={styles.nameMobile}>
                    {name}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default RoomList;
