import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { AiOutlineWechat } from 'react-icons/ai';

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 20px;
`;

export const MainNavLink = styled(NavLink)`
  padding: 5px;
  text-decoration: none;
  font-size: 14px;
  color: #000000;
  :hover,
  :focus {
    color: #ffbf00;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;
export const Icon = styled(AiOutlineWechat)`
  margin-left: 5px;
  stroke-width: 2;
`;
