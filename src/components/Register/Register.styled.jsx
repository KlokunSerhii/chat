import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 90vh;
`;
export const Title = styled.p`
  padding-bottom: 50px;
  font-size: 50px;
  font-weight: 700;
  font-style: italic;
  color: #f0f0f0;
`;

export const Forma = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled(Field)`
  width: 370px;
  height: 25px;
  font-size: 16px;
  padding: 7px 15px;
  margin-top: 10px;
  border-radius: 5px;
  color: #4b0082;
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
  color: #f0f0f0;
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
    font-size: 20px;
  }
`;
