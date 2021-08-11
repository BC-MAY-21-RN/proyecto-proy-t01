import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../constants/colors';
import {
  CheckBoxContainer,
  TextCustom,
  AlertTextCheckBox,
} from './styledComponent';

const CheckBoxField = ({
  setFieldValue,
  values,
  label,
  formControlName,
  errors,
  touched,
}) => {
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
        <AlertTextCheckBox>{errors[formControlName]}</AlertTextCheckBox>
      )}
    </CheckBoxContainer>
  );
};

export default CheckBoxField;
