import React from 'react';
import { AuthNavLink, AuthNavContainer } from './AuthNav.styled';
import { CiLogin } from 'react-icons/ci';

function AuthNav() {
  return (
    <AuthNavContainer>
      <AuthNavLink to="/register">Registration
        <CiLogin style={{ marginLeft: "5px", strokeWidth: "2" }}
        />
      </AuthNavLink>
      <AuthNavLink to="/login">Login
        <CiLogin style={{ marginLeft: "5px", strokeWidth: "2" }}
        />
      </AuthNavLink>
    </AuthNavContainer>
  );
}

export default AuthNav;
