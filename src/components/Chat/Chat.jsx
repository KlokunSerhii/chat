import React, { useEffect, useState } from 'react';
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
  Img
} from './Chat.styled';
import ChatForm from 'components/ChatForm/ChatForm';
import imgDefault from '../../img/bot.jpg'

const socket = io.connect(
  'https://chat-back-end-6mf9.onrender.com'
);

const Chat = () => {
  const [state, setState] = useState([]);
  const { search } = useLocation();
  const [params, setParams] = useState({
    room: '',
    user: '',
    avatar: imgDefault
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

  const addMessage = ({ message }) => {
    if (!message) return;
    socket.emit('send', { message, params });
  };
  
  return (
    <>
      <Container >
        {state.map(({ user, message }, i) => {
          const avatar = user.avatar ? user.avatar : imgDefault
          const you =
            user.name.trim().toLowerCase() ===
            params.name.trim().toLowerCase();
          return you ? (
            <DivYou key={i}>
              <MessageContainerYou>
                <Img src={avatar} alt="avatar" />
                <You>{message}</You>
              </MessageContainerYou>
              <NameYou>{user.name}</NameYou>
            </DivYou>
          ) : (
            <DivUser key={i}>
              <MessageContainerUser>
                <Img src={avatar} alt="avatar" />
                <User>{message}</User>
              </MessageContainerUser>
              <NameUser>{user.name}</NameUser>
            </DivUser>
          );
        })}
      </Container>
      <ChatForm onSubmit={addMessage} />
    </>
  );
};

export default Chat;
