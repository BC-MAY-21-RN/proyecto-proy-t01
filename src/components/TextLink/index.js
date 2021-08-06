import React from 'react';
import {View} from 'react-native';
import {TextLinkCustom} from './styledComponent';

const TextLink = ({text, navigation, screen}) => {
  return (
    <View>
      <TextLinkCustom
        onPress={() => {
          navigation.navigate(screen);
        }}>
        {text}
      </TextLinkCustom>
    </View>
  );
};

export default TextLink;
