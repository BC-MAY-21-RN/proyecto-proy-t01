/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInputCustom} from './styledComponent';
import color from '../../constants/colors';
import {Text, View} from 'react-native';

const TextInputField = props => {
  const {
    label,
    handleChange,
    handleBlur,
    values,
    formControlName,
    errors,
    touched,
  } = props;

  return (
    <>
      <TextInputCustom
        placeholder={label}
        placeholderTextColor={color.ligh_grey}
        name={formControlName}
        onChangeText={handleChange(formControlName)}
        onBlur={handleBlur(formControlName)}
        value={values[formControlName]}
      />
      {errors[formControlName] && touched[formControlName] && (
        <Text>{errors[formControlName]}</Text>
      )}
    </>
  );
};

export default TextInputField;
