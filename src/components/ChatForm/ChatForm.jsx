import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import smail from '../../img/smail.jpg';
import styles from './Chat.module.css';

function ChatForm({ onSubmit }) {
  const [message, setMessage] = useState('');
  const [isOpen, setOpen] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setMessage(value);
  };

  const onEmojiClick = ({ emoji }) => {
    setMessage(prevMessage => prevMessage + emoji);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ message });
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={message}
          name="message"
          onChange={handleChange}
          placeholder="write a message"
        />
        <div className={styles.iconContainer}>
          <img
            className={styles.icon}
            src={smail}
            alt=""
            onClick={() => setOpen(!isOpen)}
          />
        </div>
        <button className={styles.button} type="submit">
          Send
        </button>
        {isOpen && (
          <div className={styles.containerEmoji}>
            <EmojiPicker
              onEmojiClick={onEmojiClick}
              height={400}
              width="100%"
              autoFocusSearch={false}
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default ChatForm;
