import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavLink = styled(NavLink)`
  margin: 0;
  margin-left: 38px;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  border-radius: 6px;
  color: #f0f0f0;
  :last-child {
    margin-right: 28px;
  }

  :hover,
  :focus {
    color: #ffbf00;
  }
`;
