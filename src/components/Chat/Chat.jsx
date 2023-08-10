import React from 'react';
import { Div, User, You } from './Chat.staled';

const Chat = ({ items }) => {
  console.log(items)
  return (
    <Div items={items}  >
      {items.map(({ id, type, message }) =>
        type === 'you' ? (
          <You key={id}>{message}</You>
        ) : (
          <User key={id}>{message}</User>
        )
      )}
    </Div>
  );
};

export default Chat;
