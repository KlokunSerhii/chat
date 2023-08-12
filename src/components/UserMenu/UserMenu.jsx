import React from 'react';
import { Container, ButtonSubmit } from './UserMenu.styled';
import { useDispatch } from 'react-redux';

import { logout } from 'redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  return (
    <Container>
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
