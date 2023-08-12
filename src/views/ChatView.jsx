import Chat from '../components/Chat';
import ChatForm from '../components/ChatForm';

import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';

import { Div } from './ChatView.styled';
const socket = io.connect(
  'https://chat-back-end-6mf9.onrender.com'
);

function ChatView() {
  // const [nickName, setNickname] = useState('');
  const [message, setMessages] = useState([]);

  useEffect(() => {
    socket.on('chat-message', message => {
      setMessages(prevMessages => {
        const newMessage = {
          id: nanoid(),
          type: 'user',
          message,
        };

        return [newMessage, ...prevMessages];
      });
    });
  }, []);

  const addMessage = useCallback(({ message }) => {
    setMessages(prevMessages => {
      const newMessage = {
        id: nanoid(),
        type: 'you',
        message,
      };

      return [newMessage, ...prevMessages];
    });

    socket.emit('chat-message', message);
  }, []);

  return (
    <Div>
      <ChatForm onSubmit={addMessage} />
      <Chat items={message} />
    </Div>
  );
}

export default ChatView;
