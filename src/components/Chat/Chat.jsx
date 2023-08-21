import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

import { Container } from './Chat.styled';
import { useLocation } from 'react-router-dom';
import ChatForm from 'components/ChatForm/ChatForm';
import Messerger from 'components/Messages/Messages';

const socket = io.connect(
  // 'https://chat-back-end-6mf9.onrender.com'
  'http://localhost:3001'
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
      <Container>
        <Messerger messages={state} name={params.name} />

        {/* <DivYou>
        <NameYou></NameYou>
        <You></You>
      </DivYou>

      <DivUser>
        <NameUser></NameUser>
        <User></User>
      </DivUser> */}
      </Container>
      <ChatForm onSubmit={addMessage} />
    </>
  );
};

export default Chat;
