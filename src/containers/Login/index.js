import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import Span, {span} from '../../i18n/es';
import {TextInputField, CustomButton, TextLink} from '../../components';
import {logInValidationSchema} from './../../constants/schemas/loginSchema';

const LogIn = ({navigation}) => {
  return (
    <SafeAreaView>
      <Formik
        validationSchema={logInValidationSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          agreeTerms: false,
        }}
        validateOnMount={true}
        onSubmit={values => console.log(values)}>
        {formProps => (
          <>
            <TextInputField
              {...formProps}
              formControlName={span('emailLow')}
              label={span('email')}
            />

            <TextInputField
              {...formProps}
              formControlName={'password'}
              label={span('password')}
            />
            <CustomButton text={<Span text="login" />} />
            <CustomButton text={<Span text="loginGoogle" />} />
            <TextLink
              navigation={navigation}
              screen="SignUp"
              text={<Span text="dontAccount" />}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LogIn;
