import React from 'react';
import {
  DivUser,
  DivYou,
  NameUser,
  NameYou,
  User,
  You,
} from './Messages.styled';

function Messages({ messages, name }) {
  return (
    <div>
      {messages.map(({ user, message }) => {
        const you =
          user.name.trim().toLowerCase() ===
          name.trim().toLowerCase();
        return you ? (
          <DivYou>
            <NameYou>{user.name}</NameYou>
            <You>{message}</You>
          </DivYou>
        ) : (
          <DivUser>
            <NameUser>{user.name}</NameUser>
            <User>{message}</User>
          </DivUser>
        );
      })}
    </div>
  );
}

export default Messages;
