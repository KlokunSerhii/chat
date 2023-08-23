import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 400px;
  margin-top: 15px;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  overflow-y: scroll;
  background-color: #000000;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 450px;
    height: 440px;
  }
  @media (min-width: 1200px) {
    width: 1000px;
    height: 480px;
  }
`;
export const User = styled.p`
  padding: 2px 2px;
  border-radius: 5px;
  margin-left: 5px;
  font-size: 16px;
  color: #f0f0f0;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
export const You = styled.p`
  padding: 2px 2px;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 16px;
  color: #f0f0f0;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
export const NameUser = styled.p`
  border-radius: 5px;
  outline: none;
  font-size: 10px;
  color: #f0f0f0;
`;
export const NameYou = styled.p`
  border-radius: 5px;
  outline: none;
  font-size: 10px;
  color: #f0f0f0;
`;

export const DivUser = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 5px;
`;
export const DivYou = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 5px;
`;

export const MessageContainerYou = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 290px;
  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 400px;
  }
  @media (min-width: 1200px) {
    max-width: 600px;
  }
`;
export const MessageContainerUser = styled.div`
  display: flex;
  align-items: center;
  max-width: 290px;
  flex-direction: column;
  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 400px;
  }
  @media (min-width: 1200px) {
    max-width: 600px;
  }
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  border-radius: 50px;
`;

export const Room = styled.div`
  background-color: #000000;
  color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
