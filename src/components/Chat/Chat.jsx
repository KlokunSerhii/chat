import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom';

import {
  Container,
  DivUser,
  DivYou,
  NameUser,
  NameYou,
  User,
  You,
  MessageContainerYou,
  MessageContainerUser,
  Img,
  Room,
} from './Chat.styled';
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
      <Container>
        <Room>
          <p>Room: {params.room}</p>
          <p>Users online: {users}</p>
        </Room>
        {state.map(({ user, message }, i) => {
          const avatar = user.avatar
            ? user.avatar
            : imgDefault;
          const you =
            user.name.trim().toLowerCase() ===
            params.name.trim().toLowerCase();
          return you ? (
            <DivYou key={i}>
              <MessageContainerYou>
                <Img src={avatar} alt="avatar" />
                <NameYou>{user.name}</NameYou>
              </MessageContainerYou>
              <You>{message}</You>
            </DivYou>
          ) : (
            <DivUser key={i}>
              <MessageContainerUser>
                <Img src={avatar} alt="avatar" />
                <NameUser>{user.name}</NameUser>
              </MessageContainerUser>
              <User>{message}</User>
            </DivUser>
          );
        })}
        <div ref={messagesEndRef} />
      </Container>
      <ChatForm onSubmit={addMessage} />
    </>
  );
};

export default Chat;
