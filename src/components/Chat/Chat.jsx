import React from 'react';
import {
  Container,
  User,
  You,
  DivYou,
  DivUser,
  NameYou,
  NameUser,
} from './Chat.staled';

const Chat = ({ items }) => {
  return (
    <Container>
      {items.map(({ id, message, type }) =>
        type === 'you' ? (
          <DivYou key={id}>
            <NameYou>you</NameYou>
            <You>{message}</You>
          </DivYou>
        ) : (
          <DivUser key={id}>
            <NameUser>user</NameUser>
            <User>{message}</User>
          </DivUser>
        )
      )}
    </Container>
  );
};

export default Chat;
