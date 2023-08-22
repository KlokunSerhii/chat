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
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 320px;
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    width: 850px;
    font-size: 24px;
  }
`;
export const ButtonSubmit = styled.button`
  height: 35px;
  width: 50px;
  color: #f0f0f0;
  background: transparent;
  border: medium none;
  margin-left: 12px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    color: #ffbf00;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 60px;
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    width: 70px;
    font-size: 24px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
