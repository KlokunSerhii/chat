import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';
import styles from './Chat.module.css';
import ChatForm from 'components/ChatForm/ChatForm';
import imgDefault from '../../img/bot.jpg';

const socket = io.connect(
  'https://chat-back-end-6mf9.onrender.com'
);

const Chat = () => {
  const messagesEndRef = useRef(null);
  const [users, setUsers] = useState(0);
  const [userList, setUserList] = useState('');
  const [state, setState] = useState([]);
  const { search } = useLocation();
  const [params, setParams] = useState({
    room: '',
    user: '',
    avatar: imgDefault,
  });

  useEffect(() => {
    const searchParams = Object.fromEntries(
      new URLSearchParams(search)
    );
    setParams(searchParams);
    socket.emit('join', searchParams);
  }, [search]);

  useEffect(() => {
    socket.on('message', ({ data }) => {
      setState(prev => [...prev, data]);
    });
  }, []);

  useEffect(() => {
    socket.on('joinRoom', ({ data: { users } }) => {
      setUsers(users.length);
      setUserList(users);
    });
  }, []);

  const addMessage = ({ message }) => {
    if (!message) return;
    socket.emit('send', { message, params });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state]);

  const date = new Date();
  const Hours = date.getHours().toString().padStart(2, 0);
  const Minutes = date
    .getMinutes()
    .toString()
    .padStart(2, 0);
  const Seconds = date
    .getSeconds()
    .toString()
    .padStart(2, 0);
  console.log(userList);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerRoom}>
          <div className={styles.roomOnline}>
            <p className={styles.room}>
              Room: {params.room}
            </p>
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
                  <p lassName={styles.nameYou}>{name}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.containerChat}>
          {state.map(({ user, message }, i) => {
            const avatar = user.avatar
              ? user.avatar
              : imgDefault;
            const you =
              user.name.trim().toLowerCase() ===
              params.name.trim().toLowerCase();
            return you ? (
              <div key={i} className={styles.containerYou}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={styles.avatar}
                />
                <div className={styles.messageContainerYou}>
                  <div className={styles.infoMessage}>
                    <p className={styles.time}>
                      {Hours}:{Minutes}:{Seconds}
                    </p>
                    <p className={styles.nameYou}>
                      {user.name}
                    </p>
                  </div>
                  <p className={styles.you}>{message}</p>
                </div>
              </div>
            ) : (
              <div key={i} className={styles.containerUser}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={styles.avatar}
                />
                <div
                  className={styles.messageContainerUser}
                >
                  <div className={styles.infoMessageUser}>
                    <p className={styles.time}>
                      {Hours}:{Minutes}:{Seconds}
                    </p>
                    <p className={styles.nameUser}>
                      {user.name}
                    </p>
                  </div>

                  <p className={styles.user}>{message}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={messagesEndRef} />
      </div>

      <ChatForm onSubmit={addMessage} />
    </>
  );
};

export default Chat;
