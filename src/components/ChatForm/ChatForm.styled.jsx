import styled from '@emotion/styled';

export const Input = styled.input`
  width: 200px;
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
  width: 50px;
  color: #f0f0f0;
  background: transparent;
  border: medium none;
  margin-right: 28px;
  font-size: 20px;
  :hover {
    color: #ffbf00;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
