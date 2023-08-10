import React from 'react';
import { Container, User, You, DivYou, DivUser } from './Chat.staled';

const Chat = ({ items }) => {
  return (
    <Container>
      {items.map(({ id, message, type }) =>
        type === 'you' ? (
          <DivYou key={id}>
            <p>you</p>
            <You>{message}</You>
          </DivYou>
        ) : (
          <DivUser key={id}>
            <p>user</p>
            <User>{message}</User>
          </DivUser>
        )
      )}
    </Container>
  );
};

export default Chat;
