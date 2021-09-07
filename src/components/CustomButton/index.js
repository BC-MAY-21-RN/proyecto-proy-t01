import React from 'react';
import {DisabledButton, StyledButton, TextCustom} from './styledComponent';

const CustomButton = ({isDisabled, text, onPress}) => {
  if (isDisabled) {
    return (
      <DisabledButton>
        <TextCustom>{text}</TextCustom>
      </DisabledButton>
    );
  } else {
    return (
      <StyledButton onPress={onPress}>
        <TextCustom>{text}</TextCustom>
      </StyledButton>
    );
  }
};

export default CustomButton;
