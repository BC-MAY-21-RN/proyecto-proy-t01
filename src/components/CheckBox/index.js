import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {CheckBoxContainer, TextCustom} from './styledComponent';
import colors from '../../constants/colors';

const CheckBoxField = ({setFieldValue, values, label, name}) => {
  return (
    <CheckBoxContainer>
      <CheckBox tintColors={{true: colors.red, false: colors.ligh_grey}} />
      <TextCustom>{label}</TextCustom>
    </CheckBoxContainer>
  );
};

export default CheckBoxField;
