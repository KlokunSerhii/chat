import React from 'react';
import {
  AuthNavLink,
  AuthNavContainer,
  Icon,
} from './AuthNav.styled';

function AuthNav() {
  return (
    <AuthNavContainer>
      <AuthNavLink to="/login">
        Login
        <Icon />
      </AuthNavLink>
      <AuthNavLink to="/register">
        Registration
        <Icon />
      </AuthNavLink>
    </AuthNavContainer>
  );
}

export default AuthNav;
