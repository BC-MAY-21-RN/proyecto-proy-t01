import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import {Formik} from 'formik';
import Span, {span} from '../../i18n/es';
import {
  CheckBoxField,
  TextInputField,
  CustomButton,
  TextLink,
} from '../../components';
import {signUpValidationSchema} from '../../constants/schemas/signupSchema';
import {onGoogleButtonPress} from '../../components/helpers/firebaseSignUp';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          agreeTerms: false,
        }}
        validateOnMount={true}>
        {formProps => (
          <>
            <TextInputField
              {...formProps}
              formControlName={span('nameLow')}
              label={span('name')}
            />

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

            <CheckBoxField label={<Span text="terms" />} />
            <CustomButton text={<Span text="register" />} />
            <CustomButton text={<Span text="registerGoogle" />} />
            <TextLink
              navigation={navigation}
              screen="LogIn"
              text={<Span text="alreadyAccount" />}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;
