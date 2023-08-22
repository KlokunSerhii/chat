import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { AiOutlineWechat } from 'react-icons/ai';

export const MainNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const MainNavLink = styled(NavLink)`
  margin-left: 10px;
  padding: 5px;
  text-decoration: none;
  font-size: 18px;
  color: #f0f0f0;
  :hover,
  :focus {
    color: #ffbf00;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    margin-left: 15px;
  }
  @media (min-width: 1200px) {
    margin-left: 28px;
  }
`;
export const Icon = styled(AiOutlineWechat)`
  margin-left: 5px;
  stroke-width: 2;
`;
