import React from 'react';
import {span} from '../../library/i18n/es';
import {dog, dog2} from '../../library/images';
import {
  ImageContainer,
  StyledImage,
  StyledMainTitle,
  StyledTitle,
  MainTitleIcon,
  StyledChar,
} from './styledComponent';

export const DogImage = ({isSignedUp}) => {
  const vars = {
    mainTitle: isSignedUp ? 'adopt' : 'welcome',
    title: isSignedUp ? 'friend' : 'new',
    img: isSignedUp ? dog : dog2,
  };

  return (
    <ImageContainer>
      <StyledMainTitle>{span(vars.mainTitle)}</StyledMainTitle>
      <StyledTitle>{span(vars.title)}</StyledTitle>
      <MainTitleIcon name="pets" />
      <StyledChar>{span('exclamation')}</StyledChar>
      <StyledImage source={vars.img} />
    </ImageContainer>
  );
};
