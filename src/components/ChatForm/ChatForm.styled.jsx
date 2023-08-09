import styled from '@emotion/styled';

export const Input = styled.input`
  width: 370px;
  font-size: 16px;
  padding: 7px 15px;
  border-radius: 5px;
  color: #4b0082;
  outline: none;
  &:focus {
    border: 2px solid rgba(255, 191, 0, 0.84);
  }
`;
export const ButtonSubmit = styled.button`
  padding: 7px 15px;
  color: #4b0082;
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  :hover {
    font-weight: 500;
    color: rgba(255, 191, 0, 0.84);
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;
