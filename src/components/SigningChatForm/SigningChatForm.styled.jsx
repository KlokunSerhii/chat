import styled from '@emotion/styled';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordFill } from 'react-icons/ri';

export const Input = styled.input`
  width: 250px;
  height: 25px;
  font-size: 14px;
  padding: 7px 15px 7px 35px;
  border-radius: 5px;
  color: #4b0082;
  outline: none;
  margin-bottom: 5px;
  &:focus {
    border: 2px solid #ffbf00;
  }
  &:disabled {
    background-color: #ffffff;
    color: #4b0082;
    opacity: 1;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 400px;
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    width: 400px;
    font-size: 20px;
  }
`;
export const ButtonSubmit = styled.button`
  height: 35px;
  width: 150px;
  color: #f0f0f0;
  outline: none;
  margin-top: 15px;
  border-radius: 5px;
  font-size: 16px;
  background: transparent;
  border: medium none;
  cursor: pointer;
  :hover {
    color: #ffbf00;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  padding-bottom: 10px;
  font-size: 30px;
  font-weight: 500;
  color: #f0f0f0;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 40px;
  }
  @media (min-width: 1200px) {
    font-size: 50px;
  }
`;
export const IconUser = styled(AiOutlineUser)`
  margin-left: 5px;
  stroke: 0;
  fill: #000000;
  position: absolute;
  top: 13px;
  left: 10px;
`;
export const IconPassword = styled(RiLockPasswordFill)`
  margin-left: 5px;
  stroke: 0;
  fill: #000000;
  position: absolute;
  top: 62px;
  left: 10px;
`;

export const Img = styled.img`
border-radius: 50px;
margin-bottom: 10px;
`
