import React from 'react';
import { BsChatText } from 'react-icons/bs';
import { HomeContainer, Titel } from './HomeViews.styled';

function HomeViews() {
  return (
    <HomeContainer>
      <Titel>Hello to Chat-lite</Titel>
      <BsChatText style={{width:'150px', fill: '#ffffff',height:"150px"}}/>
    </HomeContainer>
  );
}

export default HomeViews;
