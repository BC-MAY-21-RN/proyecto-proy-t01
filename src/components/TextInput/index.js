/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {TextInputCustom} from './styledComponent';
import {signUpValidationSchema} from './../../constants/schemas/signupSchema';
import {Formik} from 'formik';
import Span from '../../i18n/es';

const TextInputField = props => {
  console.log(props);

  const {label} = props;
  return (
    // <View>
    //   <Text>{label}</Text>
    //   <TextInputCustom />
    // </View>

    <View>
      <Text>{label}</Text>
      <View>
        <TextInputCustom />
        {/*errors.name && touched.name && <Text>{errors.name}</Text>*/}
      </View>
    </View>
  );
};

export default TextInputField;
