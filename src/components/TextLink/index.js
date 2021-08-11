import React from 'react';
import {View, Text} from 'react-native';
import {TextLinkCustom, TextLinkTouchableOpacity} from './styledComponent';

const TextLink = ({onPress, text}) => {
  return (
    <TextLinkTouchableOpacity onPress={onPress}>
      <TextLinkCustom>{text}</TextLinkCustom>
    </TextLinkTouchableOpacity>
  );
};

export default TextLink;
