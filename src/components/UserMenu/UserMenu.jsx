import React from 'react';
import {
  ButtonSubmit,
  Container,
  UserName,
  Span,
  Img,
} from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../huks/auth';

import { logout } from '../../redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  console.log(user);

  return (
    <Container>
      <Span>
        <p>Hello,</p>
        <Img src={user.avatarURL} alt="avatar" />
        <UserName>{user.name}</UserName>
      </Span>
      <ButtonSubmit
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </ButtonSubmit>
    </Container>
  );
}

export default UserMenu;
