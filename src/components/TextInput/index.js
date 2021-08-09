/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {TextInputCustom} from './styledComponent';
import {signUpValidationSchema} from './../../constants/schemas/signupSchema';
import {Formik} from 'formik';
import Span from '../../i18n/es';

const TextInputField = ({
  label,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
  name,
  authError,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInputCustom />
    </View>

    // <View>
    //   <Text>{label}</Text>
    //   <View>
    //     <TextInputCustom
    //       label={<Span text="name" />}
    //       onChangeText={handleChange('name')}
    //       onBlur={handleBlur('name')}
    //       value={values.name}
    //     />
    //     {errors.name && touched.name && <Text>{errors.name}</Text>}
    //   </View>
    // </View>
  );
};

export default TextInputField;
