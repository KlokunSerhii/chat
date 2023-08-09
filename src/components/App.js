import Chat from 'components/Chat';
import ChatForm from 'components/ChatForm';
import SigningChatForm from 'components/SigningChatForm';
import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';

import { Div } from './App.styled';
const socket = io.connect('http://localhost:3001');

function App() {
  const [nickName, setNickname] = useState('');
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

  const addNickname = useCallback(name => setNickname(name), []);

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
      {!nickName && <SigningChatForm onSubmit={addNickname} />}
      {nickName && <ChatForm onSubmit={addMessage} />}
      {nickName && <Chat items={message} />}
    </Div>
  );
}

export default App;
