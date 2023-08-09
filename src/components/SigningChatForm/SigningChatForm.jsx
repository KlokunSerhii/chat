import React, { useState } from 'react';
import {
  Div,
  Form,
  Input,
  ButtonSubmit,
  Title,
  Label,
} from './SigningChatForn.styled';

function SigningChatForn({ onSubmit }) {
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
      <Title>Please enter a name</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            placeholder="login"
          />
        </Label>
        <ButtonSubmit type="submit">Register</ButtonSubmit>
      </Form>
    </Div>
  );
}

export default SigningChatForn;
