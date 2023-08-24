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
  ContainerEmoji,
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
          <ContainerEmoji>
            <EmojiPicker
              onEmojiClick={onEmojiClick}
              height={400}
              width="100%"
              autoFocusSearch={false}
            />
          </ContainerEmoji>
        )}
      </Form>
    </Div>
  );
}

export default ChatForm;
