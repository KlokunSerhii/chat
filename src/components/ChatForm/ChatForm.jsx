import React, { useState } from 'react';
import { ButtonSubmit, Div, Input } from './ChatForm.styled';

function ChatForm({ onSubmit }) {
  const [state, setState] = useState({
    message: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      message: '',
    });
  };

  const { message } = state;
  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <Input
          value={message}
          name="message"
          onChange={handleChange}
          placeholder="write a message"
        />
        <ButtonSubmit type="submit">Send</ButtonSubmit>
      </form>
    </Div>
  );
}

export default ChatForm;
