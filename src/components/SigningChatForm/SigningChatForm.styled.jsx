import styled from '@emotion/styled';

export const Input = styled.input`
  width: 250px;
  font-size: 16px;
  padding: 7px 15px;
  border-radius: 5px;
  color: #4b0082;
  outline: none;
  &:focus {
    border: 2px solid #ffbf00;
  }
`;
export const ButtonSubmit = styled.button`
  height: 35px;
  width: 80px;
  color: #4b0082;
  outline: none;
  margin-top: 15px;
  margin-left: 20px;
  border-radius: 5px;
  font-size: 16px;
  :hover {
    color: #ffbf00;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;