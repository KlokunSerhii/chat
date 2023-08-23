import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
`;
export const IconDiv = styled.div`
  position: absolute;
  top: 3px;
  right: 55px;
  @media (min-width: 768px) and (max-width: 1199px) {
    right: 75px;
  }
  @media (min-width: 1200px) {
    right: 85px;
  }
`;
export const Icon = styled.img`
  width: 25px;
  @media (min-width: 1200px) {
    width: 30px;
  }
`;
export const Input = styled.input`
  width: 250px;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  color: #000000;
  outline: none;
  &:focus {
    border: 2px solid #ffbf00;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 320px;
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    width: 850px;
    font-size: 20px;
  }
`;
export const ButtonSubmit = styled.button`
  height: 25px;
  width: 40px;
  color: #f0f0f0;
  font-weight: 700;
  background: transparent;
  border: medium none;
  margin-left: 8px;
  padding: 0;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: #ffbf00;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 60px;
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    width: 70px;
    font-size: 20px;
  }
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
