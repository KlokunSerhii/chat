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

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerRoom}>
          <p>Room: {params.room}</p>
          <p>Users online: {users}</p>
        </div>
        {state.map(({ user, message }, i) => {
          const avatar = user.avatar
            ? user.avatar
            : imgDefault;
          const you =
            user.name.trim().toLowerCase() ===
            params.name.trim().toLowerCase();
          return you ? (
            <div key={i} className={styles.containerYou}>
              <div className={styles.messageContainerYou}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={styles.avatar}
                />
                <p className={styles.nameYou}>
                  {user.name}
                </p>
              </div>
              <p className={styles.you}>{message}</p>
            </div>
          ) : (
            <div key={i} className={styles.containerUser}>
              <div className={styles.messageContainerUser}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={styles.avatar}
                />
                <p className={styles.nameUser}>
                  {user.name}
                </p>
              </div>
              <p className={styles.user}>{message}</p>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <ChatForm onSubmit={addMessage} />
    </>
  );
};

export default Chat;
