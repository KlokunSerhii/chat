import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 480px;
  border: 1px solid;
  border-radius: 10px;
  overflow-y: scroll;
  background-color: #f0f0f0;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 450px;
  }
  @media (min-width: 1200px) {
    width: 1000px;
  }
`;
export const User = styled.p`
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 5px 5px 15px;
  outline: none;
  font-size: 16px;
  background-color: #ffbf00;
  color: #f0f0f0;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;
export const NameUser = styled.p`
  border-radius: 5px;
  margin: 5px 0 5px 15px;
  outline: none;
  font-size: 10px;
`;
export const You = styled.p`
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 15px 5px 5px;
  outline: none;
  font-size: 16px;
  background-color: #4b0082;
  color: #f0f0f0;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 20px;
  }
  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;
export const NameYou = styled.p`
  border-radius: 5px;
  margin: 5px 15px 5px 0;
  outline: none;
  font-size: 10px;
`;

export const DivUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const DivYou = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
