import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Chat.module.css';
import ChatForm from 'components/ChatForm/ChatForm';
import imgDefault from '../../img/bot.jpg';
import { TiUserOutline } from 'react-icons/ti';
import { AiFillCloseCircle } from 'react-icons/ai';
import { socket } from '../../options/socket';
import {
  getMessages,
  addMessageDB,
} from 'redux/message/operations';
import { useDispatch } from 'react-redux';
import { useMessage } from '../../huks/message'


const Chat = () => {
  const messagesEndRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [users, setUsers] = useState(0);
  const [userList, setUserList] = useState('');
  const { items } = useMessage();
  const [state, setState] = useState([]);
  const { search } = useLocation();
  const [params, setParams] = useState({
    room: '',
    user: '',
    avatar: imgDefault,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessages(params.room))
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
      dispatch(addMessageDB({params , data}))
    });
  }, [params, dispatch ]);


  useEffect(() => {
    socket.on('room', ({ data: { users } }) => {
      setUsers(users.length);
      setUserList(users);
    });
  }, []);

  const addMessage = ({ message }) => {
    if (!message) return;
    socket.emit('send', { message, params });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [state]);



  return (
    <>
      <button
        type="button"
        className={styles.buttonOpen}
        onClick={() => {
          setOpen(true);
        }}
        onFocus={() => {
          setOpen(true);
        }}
      >
        <TiUserOutline className={styles.iconOpen} />
        Online
      </button>
      <div className={styles.container}>
        <div className={styles.containerRoom}>
          <div className={styles.roomOnline}>
            <p className={styles.room}>
              Room: {params.room}
            </p>
            <p className={styles.users}>
              Users online: {users}
            </p>
          </div>
          <ul className={styles.roomList}>
            {userList &&
              userList.map(({ name, avatar }, i) => (
                <li key={i} className={styles.roomItem}>
                  <img
                    className={styles.avatarRoom}
                    src={avatar}
                    alt="avatar"
                  />
                  <p className={styles.nameYou}>{name}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.containerChat}>
        {items.map(({ user, message }, i) => {
            const avatar = user.avatar
              ? user.avatar
              : imgDefault;
            const you =
              user.name.trim().toLowerCase() ===
              params.name.trim().toLowerCase();
            return you ? (
              <div key={i} className={styles.containerYou}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={styles.avatar}
                />
                <div className={styles.messageContainerYou}>
                  <div className={styles.infoMessage}>
                    <p className={styles.time}>
                      {}
                    </p>
                    <p className={styles.nameYou}>
                      {user.name}
                    </p>
                  </div>
                  <p className={styles.you}>{message}</p>
                </div>
              </div>
            ) : (
              <div key={i} className={styles.containerUser}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={styles.avatar}
                />
                <div
                  className={styles.messageContainerUser}
                >
                  <div className={styles.infoMessageUser}>
                    <p className={styles.time}>
                      {}
                    </p>
                    <p className={styles.nameUser}>
                      {user.name}
                    </p>
                  </div>

                  <p className={styles.user}>{message}</p>
                </div>
              </div>
            );
          })}
          {state.map(({ user, message }, i) => {
            const avatar = user.avatar
              ? user.avatar
              : imgDefault;
            const you =
              user.name.trim().toLowerCase() ===
              params.name.trim().toLowerCase();
            return you ? (
              <div key={i} className={styles.containerYou}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={styles.avatar}
                />
                <div className={styles.messageContainerYou}>
                  <div className={styles.infoMessage}>
                    <p className={styles.time}>
                      {}
                    </p>
                    <p className={styles.nameYou}>
                      {user.name}
                    </p>
                  </div>
                  <p className={styles.you}>{message}</p>
                </div>
              </div>
            ) : (
              <div key={i} className={styles.containerUser}>
                <img
                  src={avatar}
                  alt="avatar"
                  className={styles.avatar}
                />
                <div
                  className={styles.messageContainerUser}
                >
                  <div className={styles.infoMessageUser}>
                    <p className={styles.time}>
                      {}
                    </p>
                    <p className={styles.nameUser}>
                      {user.name}
                    </p>
                  </div>

                  <p className={styles.user}>{message}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div ref={messagesEndRef} />
      </div>

      <ChatForm onSubmit={addMessage} />
      {isOpen && (
        <div className={styles.containerRoomMobile}>
          <button
            type="button"
            className={styles.buttonClose}
            onClick={() => {
              setOpen(false);
            }}
          >
            <AiFillCloseCircle
              className={styles.iconClose}
            />
          </button>
          <div className={styles.roomOnlineMobile}>
            <p className={styles.roomMobile}>
              Room: {params.room}
            </p>
            <p className={styles.usersMobile}>
              Users online: {users}
            </p>
          </div>
          <ul className={styles.roomList}>
            {userList &&
              userList.map(({ name, avatar }, i) => (
                <li
                  key={i}
                  className={styles.roomItemMobile}
                >
                  <img
                    className={styles.avatarRoom}
                    src={avatar}
                    alt="avatar"
                  />
                  <p className={styles.nameMobile}>
                    {name}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Chat;
