import styled from '@emotion/styled';
import { BsPersonCircle } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const ButtonSubmit = styled.button`
  height: 35px;
  width: 100px;
  color: #f0f0f0;
  background: transparent;
  border: medium none;
  margin-right: 28px;
  font-size: 18px;
  font-weight: 700;
  :hover {
    color: #ffbf00;
  }
`;
export const Span = styled.span`
  display: flex;
  margin: 0px;
  text-decoration: none;
  font-weight: 800;
  font-size: 24px;
  color: #4b0082;
`;
export const Icon = styled(BsPersonCircle)`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  margin-right: 10px;
  color: rgba(255, 191, 0, 0.84);
`;
export const UserName = styled.p`
  color: rgba(255, 191, 0, 0.84);
`;
