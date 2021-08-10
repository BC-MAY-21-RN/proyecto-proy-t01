/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import {TextInputCustom} from './styledComponent';
import color from '../../constants/colors';

const TextInputField = ({label}) => {
  return (
    <TextInputCustom
      placeholder={label}
      placeholderTextColor={color.ligh_grey}
    />
  );
};

export default TextInputField;
