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
  MessageContainer
} from './Chat.styled';
import ChatForm from 'components/ChatForm/ChatForm';

const socket = io.connect(
  'https://chat-back-end-6mf9.onrender.com'
);

const Chat = () => {
  const [state, setState] = useState([]);
  const { search } = useLocation();
  const [params, setParams] = useState({
    room: '',
    user: '',
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
          const you =
            user.name.trim().toLowerCase() ===
            params.name.trim().toLowerCase();
          return you ? (
            <DivYou key={i}>
              <NameYou>{user.name}</NameYou>
              <MessageContainer>
                <You>{message}</You>
              </MessageContainer>
              
            </DivYou>
          ) : (
            <DivUser key={i}>
              <NameUser>{user.name}</NameUser>
              <MessageContainer>
                <User>{message}</User>
              </MessageContainer>
              
            </DivUser>
          );
        })}
      </Container>
      <ChatForm onSubmit={addMessage} />
    </>
  );
};

export default Chat;
