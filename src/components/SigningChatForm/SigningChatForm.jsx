import React, { useState } from 'react';
import {
  ButtonSubmit,
  Div,
  Input,
} from './SigningChatForm.styled';

function SigningChatForm({ onSubmit }) {
  const [state, setState] = useState({
    name: '',
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
      name: '',
    });
  };

  const { name } = state;
  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <Input
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="enter name"
        />
        <ButtonSubmit type="submit">Send</ButtonSubmit>
      </form>
    </Div>
  );
}

export default SigningChatForm;
