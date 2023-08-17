import React from 'react';
import {
  Container,
  User,
  You,
  DivYou,
  DivUser,
  NameYou,
  NameUser,
} from './Chat.styled';

const Chat = ({ items }) => {
console.log(items)
  return (
    <Container>
      {items.map(({ id, message, type, nickName  }) =>
        (type === 'you') ? (
          <DivYou key={id}>
            <NameYou>{nickName.name}</NameYou>
            <You>{message}</You>
          </DivYou>
        ) : (
          <DivUser key={id}>
            <NameUser>{nickName.name}</NameUser>
            <User>{message}</User>
          </DivUser>
        )
      )}
    </Container>
  );
};

export default Chat;
