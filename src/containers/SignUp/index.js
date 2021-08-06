import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import Span from '../../i18n/es';
import {
  CheckBoxField,
  TextInputField,
  CustomButton,
  TextLink,
} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView>
      <Formik>
        <View>
          <TextInputField label={<Span text="name" />} />
          <TextInputField label={<Span text="email" />} />
          <TextInputField label={<Span text="password" />} />
          <CheckBoxField label={<Span text="terms" />} />
          <CustomButton text={<Span text="register" />} />
          <CustomButton text={<Span text="registerGoogle" />} />
          <TextLink
            navigation={navigation}
            screen="LogIn"
            text={<Span text="alreadyAccount" />}
          />
        </View>
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;
