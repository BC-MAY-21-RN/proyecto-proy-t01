import React from 'react';
import {StyledButton} from './styledComponent';
import {StyledButton, TextCustom} from './styledComponent';

const CustomButton = ({text, onPress}) => {
  return (
    <StyledButton onPress={onPress}>
      <TextCustom>{text}</TextCustom>
    </StyledButton>
  );
};

export default CustomButton;
