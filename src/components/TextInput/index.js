/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {TextInputCustom} from './styledComponent';
import {signUpValidationSchema} from './../../constants/schemas/signupSchema';
import {Formik} from 'formik';
import Span from '../../i18n/es';

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
    <View>
      <Text>{label}</Text>
      <View>
        <TextInputCustom
          name={formControlName}
          onChangeText={handleChange(formControlName)}
          onBlur={handleBlur(formControlName)}
          value={values[formControlName]}
        />
        {errors[formControlName] && touched[formControlName] && (
          <Text>{errors[formControlName]}</Text>
        )}
      </View>
    </View>
  );
};

export default TextInputField;
