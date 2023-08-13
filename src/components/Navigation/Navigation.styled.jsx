import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const MainNavLink = styled(NavLink)`
  margin-left: 28px;
  padding: 5px;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  color: #f0f0f0;
  :hover,
  :focus {
    color: #ffbf00;
  }
`;
