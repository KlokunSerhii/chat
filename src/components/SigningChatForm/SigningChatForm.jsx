import React, { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import styles from './SigningChatForm.module.css';
const FIELDS = {
  ROOM: 'room',
};

function SigningChatForm() {
  const { ROOM } = FIELDS;
  const { user } = useAuth();

  const [values, setValues] = useState({
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
    if (!values[ROOM]) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.ContainerJoin}>
      <img
        src={user.avatarURL}
        alt="avatar"
        className={styles.avatar}
      />
      <form className={styles.form}>
      <label className={styles.label}>
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
        </label>
        <label className={styles.label}>

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
         </label>
        <Link
          className={styles.buttonLink}
          to={`/chat/${values[ROOM]}?name=${user.name}&room=${values[ROOM]}&avatar=${user.avatarURL}`}
        >
          <button
            className={styles.buttonIn}
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
