import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { CiLogin } from 'react-icons/ci';

export const AuthNavContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
  }
  @media (min-width: 1200px) {
    display: flex;
  }
`;

export const AuthNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin: 0;
  margin-left: 10px;
  text-decoration: none;
  font-size: 18px;
  border-radius: 6px;
  color: #f0f0f0;
  :last-child {
    margin-right: 15px;
  }
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

export const Icon = styled(CiLogin)`
  margin-left: 5px;
  stroke-width: 2;
`;
