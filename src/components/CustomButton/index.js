import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {onGoogleButtonPress} from '../helpers/firebaseSignUp';
import {StyledButton, TextCustom} from './styledComponent';

const CustomButton = ({text, onPress}) => {
  return (
    <StyledButton onPress={onPress}>
      <TextCustom>{text}</TextCustom>
    </StyledButton>
  );
};

export default CustomButton;
