import styled from '@emotion/styled';
import { BsChatText } from 'react-icons/bs';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const Titel = styled.h1`
  font-style: italic;
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  color: #f0f0f0;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 40px;
  }
  @media (min-width: 1200px) {
    font-size: 50px;
  }
`;
export const Icon = styled(BsChatText)`
  width: 80px;
  height: 80px;
  fill: #ffffff;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 1200px) {
    width: 150px;
    height: 150px;
  }
`;
