import React from 'react';
import {DogDetailsContainer, DetailsText, StyledImage} from './styledComponent';

const DogDetails = props => {
  const {photo} = props;
  return (
    <DogDetailsContainer>
      {/* <DetailsText>Hello World</DetailsText> */}
      <StyledImage source={photo}></StyledImage>
    </DogDetailsContainer>
  );
};

export default DogDetails;
