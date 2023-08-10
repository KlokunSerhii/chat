import styled from '@emotion/styled';

export const User = styled.p`
  height: auto;
  padding: 10px 45px;
  border-radius: 5px;
  outline: none;
  background-color: yellow;
`;
export const You = styled.p`
  height: auto;
  padding: 10px 45px;
  border-radius: 5px;
  outline: none;
  background-color: green;
`;
export const Div = styled.div`
  width: 500px;
  border: 1px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items:${({items}) => {
    items.map(({type}) => type === 'you' ? "flex-end" : "flex-start" 
    )
  }}
`;
