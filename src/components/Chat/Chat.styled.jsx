import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
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
