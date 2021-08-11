/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {onGoogleButtonPress} from '../helpers/firebaseSignUp';
import {StyledButton} from './styledComponent';

const CustomButton = ({text, onPress}) => {
  return (
    <StyledButton onPress={onPress}>
      <View>
        <Text>{text}</Text>
      </View>
    </StyledButton>
  );
};

export default CustomButton;
