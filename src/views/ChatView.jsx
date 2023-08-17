import Chat from '../components/Chat';
import ChatForm from '../components/ChatForm';
import SigningChatForm from '../components/SigningChatForm'
import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { nanoid } from 'nanoid';

import { Div } from './ChatView.styled';

const socket = io.connect(
  'https://chat-back-end-6mf9.onrender.com'
);

function ChatView() {
  const [nickName, setNickname] = useState('');
  const [message, setMessages] = useState([]);


  useEffect(() => {
    socket.on('chat-message', message => {
      setMessages(prevMessages => {
        const newMessage = {
          id: nanoid(),
          type: 'user',
          message,
          nickName
        };
        return [newMessage, ...prevMessages];
      });
    });
  }, [nickName]);
  const addNickname = useCallback(name => setNickname(name), []);

  const addMessage = useCallback(({ message }) => {
    setMessages(prevMessages => {
      const newMessage = {
        id: nanoid(),
        type: 'you',
        message,
        nickName
      };
      return [newMessage, ...prevMessages];
    });

    socket.emit('chat-message', message);
  }, [nickName]);

  return (
    <Div>
      {!nickName && <SigningChatForm onSubmit={addNickname}/>}
      {nickName && <Chat items={message} />}
      {nickName && <ChatForm onSubmit={addMessage}/>}
    </Div>
  );
}

export default ChatView;
