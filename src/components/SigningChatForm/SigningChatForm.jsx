import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useAuth } from '../../huks/auth';
import styles from './SigningChatForm.module.css';
const FIELDS = {
  NAME: 'name',
  ROOM: 'room',
};

function SigningChatForm() {
  const { NAME, ROOM } = FIELDS;
  const { user } = useAuth();

  const [values, setValues] = useState({
    [NAME]: '',
    [ROOM]: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = e => {
    if (!values[ROOM]) e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Join</h1>
      <img
        src={user.avatarURL}
        alt="avatar"
        className={styles.avatar}
      />
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={user.name}
          name="name"
          onChange={handleChange}
          placeholder="enter name"
          autoComplete="off"
          disabled
          required
        />
        <AiOutlineUser className={styles.iconUser} />
        <input
          className={styles.input}
          type="text"
          value={values[ROOM]}
          name="room"
          onChange={handleChange}
          placeholder="enter RoomID"
          autoComplete="off"
          required
        />
        <RiLockPasswordFill
          className={styles.iconPassword}
        />
        <Link
          to={`/chat-room?name=${user.name}&room=${values[ROOM]}&avatar=${user.avatarURL}`}
        >
          <button
            className={styles.button}
            type="submit"
            onClick={handleClick}
          >
            Join
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SigningChatForm;
