import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Chat.module.css';
import ChatForm from 'components/ChatForm/ChatForm';
import imgDefault from '../../img/bot.jpg';
import { TiUserOutline } from 'react-icons/ti';
import { socket } from '../../options/socket';
import {
  getMessages,
  addMessageDB,
} from 'redux/message/operations';
import { useDispatch } from 'react-redux';
import RoomList from 'components/RoomList/RoomList';
import MessageListDB from 'components/MessageListDB/MessageListDB';
import MessageListSocket from 'components/MessageListSocket/MessageListSocket';

const Chat = () => {
  const messagesEndRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [state, setState] = useState([]);
  const { search } = useLocation();
  const [params, setParams] = useState({
    room: '',
    user: '',
    avatar: imgDefault,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.room) dispatch(getMessages(params.room));
  }, [dispatch, params.room]);

  useEffect(() => {
    const searchParams = Object.fromEntries(
      new URLSearchParams(search)
    );
    setParams(searchParams);
    socket.emit('join', searchParams);
  }, [search]);

  useEffect(() => {
    socket.on('message', ({ data }) => {
      setState(prevState => [...prevState, data]);
    });
  }, []);

  useEffect(() => {
    socket.on('message', ({ data }) => {
      dispatch(addMessageDB({ params, data }));
    });
  }, [dispatch, params]);

  useEffect(() => {
    scrollToBottom();
  }, [state]);

  const addMessage = ({ message }) => {
    if (!message) return;
    socket.emit('send', { message, params });
  };

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.chat}>
      <button
        type="button"
        className={styles.buttonOpen}
        onClick={toggleOpen}
      >
        <TiUserOutline className={styles.iconOpen} />
        Online
      </button>
      <div className={styles.container}>
        <RoomList isOpen={isOpen} params={params} />
        <div className={styles.containerChat}>
          <MessageListDB params={params} />
          <MessageListSocket
            state={state}
            params={params}
          />
        </div>
        <div ref={messagesEndRef} />
      </div>
      <ChatForm onSubmit={addMessage} />
    </div>
  );
};

export default Chat;
