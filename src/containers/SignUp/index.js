import React, {useState} from 'react';
import {Formik} from 'formik';
import {span} from '../../i18n/es';
import {signUpValidationSchema} from '../../constants/schemas/signUpValidationSchema';
import {signInWithNameEmailAndPassword} from '../../library/hooks/authControl';
import {
  MainContainer,
  InputContainer,
  TopContainer,
  ButtonContainer,
  InputTextContainer,
} from './styledComponents';
import {
  CheckBoxField,
  TextInputField,
  CustomButton,
  TextLink,
  DogImage,
} from '../../components';
import {onGoogleButtonPress} from '../../components/helpers/firebaseSignUp';

const SignUp = ({navigation}) => {
  const [emailInUseError, setEmailInUseError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleSignIn = values => {
    const {name, email, password} = values;
    signInWithNameEmailAndPassword(name, email, password)
      .then(() => {
        setEmailInUseError(false);
      })
      .catch(() => {
        setEmailInUseError(true);
      });
  };

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
          agreeTerms: true,
        }}
        validateOnMount={true}
        onSubmit={values => handleSignIn(values)}>
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
                authError={emailInUseError && span('emailUsed')}
                icon="email"
              />
              <TextInputField
                {...formProps}
                formControlName={span('passwordLow')}
                label={span('password')}
                icon={showPassword ? 'visibility' : 'visibility-off'}
                isPassword
              />
            </InputTextContainer>
            <CheckBoxField
              {...formProps}
              label={span('terms')}
              formControlName={span('agreeTermsLow')}
            />
            <ButtonContainer>
              <CustomButton
                text={span('register')}
                onPress={formProps.handleSubmit}
              />
              <CustomButton
                text={span('registerGoogle')}
                onPress={() => onGoogleButtonPress()}
              />
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
