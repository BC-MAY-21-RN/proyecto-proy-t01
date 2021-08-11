import React from 'react';
import {StyledButton, TextCustom} from './styledComponent';

const CustomButton = ({text}) => {
  return (
    <StyledButton>
      <TextCustom>{text}</TextCustom>
    </StyledButton>
  );
};

export default CustomButton;
