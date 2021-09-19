import React from 'react';
import {TextLinkCustom, TextLinkTouchableOpacity} from './styledComponent';

export const TextLink = ({onPress, text}) => {
  return (
    <TextLinkTouchableOpacity onPress={onPress}>
      <TextLinkCustom>{text}</TextLinkCustom>
    </TextLinkTouchableOpacity>
  );
};
