import React, { useState } from 'react';
import {
  ButtonSubmit,
  Div,
  Input,
  Form,
} from './SigningChatForm.styled';
import { Link } from 'react-router-dom';

const FIELDS = {
  NAME: 'name',
  ROOM: 'room',
};

function SigningChatForm() {
  const { NAME, ROOM } = FIELDS;

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
    const isDidabled = Object.values(values).some(
      value => !value
    );
    if (isDidabled) e.preventDefault();
  };

  return (
    <Div>
      <h1>Join</h1>
      <Form>
        <Input
          type="text"
          value={values[NAME]}
          name="name"
          onChange={handleChange}
          placeholder="enter name"
          autoComplete="off"
          required
        />
        <Input
          type="text"
          value={values[ROOM]}
          name="room"
          onChange={handleChange}
          placeholder="enter RoomID"
          autoComplete="off"
          required
        />
        <Link
          to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
        >
          <ButtonSubmit type="submit" onClick={handleClick}>
            Join
          </ButtonSubmit>
        </Link>
      </Form>
    </Div>
  );
}

export default SigningChatForm;
