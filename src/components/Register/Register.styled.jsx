import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 90vh;
`;
export const Title = styled.h1`
  padding-bottom: 50px;
  font-size: 30px;
  font-weight: 500;
  color: #000000;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 40px;
  }
  @media (min-width: 1200px) {
    font-size: 50px;
  }
`;

export const Forma = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

export const Input = styled(Field)`
  width: 250px;
  height: 25px;
  font-size: 14px;
  padding: 7px 15px 7px 35px;
  border-radius: 5px;
  color: #000000;
  outline: none;
  &:focus {
    border: 2px solid #ffbf00;
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
  margin-top: 15px;
  margin-bottom: 15px;
  color: #000000;
  font-weight: 700;
  background: transparent;
  border: medium none;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: #ffbf00;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const IconEmail = styled(MdOutlineEmail)`
  margin-left: 5px;
  stroke: 0;
  fill: #000000;
  position: absolute;
  top: 14px;
  left: 10px;
`;

export const IconPassword = styled(RiLockPasswordFill)`
  margin-left: 5px;
  stroke: 0;
  fill: #000000;
  position: absolute;
  top: 14px;
  left: 10px;
`;
export const IconUser = styled(AiOutlineUser)`
  margin-left: 5px;
  stroke: 0;
  fill: #000000;
  position: absolute;
  top: 14px;
  left: 10px;
`;

export const ErrorMessageDiv = styled.div`
  color: #000000;
  margin-bottom: 5px;
  fontsize: 20px;
`;
