import React from 'react';
import { Container, User, You, DivYou, DivUser} from './Chat.staled';

const Chat = ({ items }) => {
  return (
    <Container>
      {items.map(({ id, type, message }) =>
        type === 'you'?(
        <DivYou key={id}>
          <You>{message}</You>
        </DivYou>
        ):(
        <DivUser key={id}>
          <User>{message}</User>
        </DivUser>
        ) 
      )}
    </Container>
  );
};

export default Chat;
