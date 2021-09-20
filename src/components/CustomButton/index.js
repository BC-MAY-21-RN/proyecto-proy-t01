import React from 'react';
import {DisabledButton, StyledButton, TextCustom} from './styledComponent';

export const CustomButton = ({isDisabled, text, onPress}) => {
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
