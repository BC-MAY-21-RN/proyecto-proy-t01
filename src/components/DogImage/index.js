/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {span} from '../../i18n/es';

import {
  ImageContainer,
  StyledImage,
  StyledMainTitle,
  StyledTitle,
  MainTitleIcon,
  StyledChar,
} from './styledComponent';

const DogImage = () => {
  return (
    <ImageContainer>
      <StyledMainTitle>{span('adopt')}</StyledMainTitle>
      <StyledTitle>{span('friend')}</StyledTitle>
      <MainTitleIcon name="pets" />
      <StyledChar>{span('exclamation')}</StyledChar>
      <StyledImage source={require('../../constants/img/dog1.png')} />
    </ImageContainer>
  );
};

export default DogImage;
