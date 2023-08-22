import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavContainer = styled.div`
  display: flex;
`

export const AuthNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 0;
  margin-left: 38px;
  text-decoration: none;
  font-weight: 700;
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
