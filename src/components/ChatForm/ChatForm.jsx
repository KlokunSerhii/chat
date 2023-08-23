import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import smail from '../../img/smail.jpg';
import {
  ButtonSubmit,
  Div,
  IconDiv,
  Input,
  Form,
  Icon,
} from './ChatForm.styled';

function ChatForm({ onSubmit }) {
  const [message, setMessage] = useState('');
  const [isOpen, setOpen] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setMessage(value);
  };

  const onEmojiClick = ({ emoji }) => {
    setMessage(prevMessage => prevMessage + emoji);
    setOpen(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ message });
    setMessage('');
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Input
          value={message}
          name="message"
          onChange={handleChange}
          placeholder="write a message"
        />
        <IconDiv>
          <Icon
            src={smail}
            alt=""
            onClick={() => setOpen(!isOpen)}
          />
        </IconDiv>
        <ButtonSubmit type="submit">Send</ButtonSubmit>
        {isOpen && (
          <div>
            <EmojiPicker
              onEmojiClick={onEmojiClick}
              width="100%"
              height="400px"
              size="50"
            />
          </div>
        )}
      </Form>
    </Div>
  );
}

export default ChatForm;
