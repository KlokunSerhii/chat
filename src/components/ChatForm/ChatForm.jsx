import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import smail from '../../img/smail.png';
import styles from './ChatForm.module.css';
import { AiOutlineSend } from 'react-icons/ai';

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
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <img
          className={styles.icon}
          src={smail}
          alt=""
          onClick={() => setOpen(!isOpen)}
        />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          value={message}
          name="message"
          onChange={handleChange}
          placeholder="write a message"
        />

        <button className={styles.button} type="submit">
          <AiOutlineSend className={styles.iconSend} />
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
