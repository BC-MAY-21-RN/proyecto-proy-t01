import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {CheckBoxContainer, TextCustom} from './styledComponent';
import colors from '../../constants/colors';

const CheckBoxField = ({setFieldValue, values, label, name}) => {
  return (
    <CheckBoxContainer>
      <CheckBox
        disabled={false}
        onValueChange={newValue => setFieldValue(formControlName, newValue)}
        value={values[formControlName]}
        tintColors={{true: colors.red, false: colors.ligh_grey}}
      />
      <TextCustom>{label}</TextCustom>
      {errors[formControlName] && touched[formControlName] && (
        <Text>{errors[formControlName]}</Text>
      )}
    </CheckBoxContainer>
  );
};

export default CheckBoxField;
