import styled from '@emotion/styled';

export const Container = styled.div`
  margin-right: 28px;
  @media (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;
export const ButtonSubmit = styled.button`
  height: 35px;
  width: 100px;
  color: #f0f0f0;
  background: transparent;
  border: medium none;
  margin-right: 28px;
  font-size: 18px;
  :hover {
    color: #ffbf00;
  }
`;
export const Span = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #f0f0f0;
`;

export const UserName = styled.p`
  margin-left: 5px;
  color: #f0f0f0;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border-radius: 50px;
`;
