import React from 'react';
import {View, SafeAreaView, TextInput, Text} from 'react-native';
import {Formik} from 'formik';
import Span, {span} from '../../i18n/es';
import colors from '../../constants/colors';
import {
  MainContainer,
  InputContainer,
  TopContainer,
  ButtonContainer,
} from './styledComponent';

import {
  CheckBoxField,
  TextInputField,
  CustomButton,
  TextLink,
  DogImage,
} from '../../components';
import {signUpValidationSchema} from '../../constants/schemas/signupSchema';

const SignUp = ({navigation}) => {
  return (
    <MainContainer>
      <TopContainer>
        <DogImage />
      </TopContainer>
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
          <InputContainer>
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
            <CheckBoxField label={span('terms')} />
            <ButtonContainer>
              <CustomButton text={span('register')} />
              <CustomButton text={span('registerGoogle')} />
              <TextLink
                onPress={() => {
                  navigation.navigate('LogIn');
                }}
                text={span('alreadyAccount')}
              />
            </ButtonContainer>
          </InputContainer>
        )}
      </Formik>
    </MainContainer>
  );
};

export default SignUp;
