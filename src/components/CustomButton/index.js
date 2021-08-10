/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {StyledButton, TextCustom, MainTitleIconG} from './styledComponent';

const CustomButton = ({text}) => {
  return (
    <StyledButton>
      <View>
        <TextCustom>{text}</TextCustom>
        {/* <MainTitleIconG name="google" /> */}
      </View>
    </StyledButton>
  );
};

export default CustomButton;
