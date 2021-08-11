import React from 'react';
import {Formik} from 'formik';
import {span} from '../../i18n/es';
import {signUpValidationSchema} from '../../constants/schemas/signupSchema';
import {
  MainContainer,
  InputContainer,
  TopContainer,
  ButtonContainer,
  InputTextContainer,
} from './styledComponent';
import {
  CheckBoxField,
  TextInputField,
  CustomButton,
  TextLink,
  DogImage,
} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <MainContainer>
      <TopContainer>
        <DogImage isSignedUp />
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
            <InputTextContainer>
              <TextInputField
                {...formProps}
                formControlName={span('nameLow')}
                label={span('name')}
                icon="person"
              />
              <TextInputField
                {...formProps}
                formControlName={span('emailLow')}
                label={span('email')}
                icon="email"
              />
              <TextInputField
                {...formProps}
                formControlName={'password'}
                label={span('password')}
                icon="visibility"
              />
            </InputTextContainer>
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
