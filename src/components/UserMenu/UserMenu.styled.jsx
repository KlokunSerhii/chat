import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-right: 0;
  }
`;
export const ButtonSubmit = styled.button`
  color: #000000;
  background: transparent;
  border: none;
  padding: 0;
  font-size: 14px;
  :hover {
    color: #ffbf00;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 16px;
    margin-left: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
    margin-left: 20px;
  }
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #000000;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 16px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const UserName = styled.p`
  margin-left: 5px;
  color: #000000;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border-radius: 50px;
`;
