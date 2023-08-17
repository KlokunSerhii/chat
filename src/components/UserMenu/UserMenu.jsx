import React from 'react';
import { ButtonSubmit } from './UserMenu.styled';
import { useDispatch } from 'react-redux';

import { logout } from 'redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  return (
    <>
      <ButtonSubmit
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </ButtonSubmit>
    </>
  );
}

export default UserMenu;
