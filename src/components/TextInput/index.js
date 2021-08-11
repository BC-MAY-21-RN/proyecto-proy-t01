/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TextInputCustom,
  InputContainer,
  InputIcon,
  AlertText,
} from './styledComponent';
import color from '../../constants/colors';
import {Text} from 'react-native';

const TextInputField = props => {
  const {
    label,
    icon,
    handleChange,
    handleBlur,
    values,
    formControlName,
    errors,
    touched,
  } = props;

  return (
    <>
      <InputContainer>
        <TextInputCustom
          placeholder={label}
          placeholderTextColor={color.ligh_grey}
          name={formControlName}
          onChangeText={handleChange(formControlName)}
          onBlur={handleBlur(formControlName)}
          value={values[formControlName]}
        />
        <InputIcon name={icon} />
      </InputContainer>
      <AlertText>
        {errors[formControlName] && touched[formControlName] && (
          <Text>{errors[formControlName]}</Text>
        )}
      </AlertText>
    </>
  );
};

export default TextInputField;
