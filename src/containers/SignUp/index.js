import React, {useState} from 'react';
import {Formik} from 'formik';
import {span} from '../../library/i18n/es';
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
  LoadingPage,
} from '../../components';
import {signUpValidationSchema} from '../../library/constants';
import {firebaseMethods} from '../../library/methods';

export const SignUp = ({navigation}) => {
  const {onGoogleButtonPress, signInWithNameEmailAndPassword} = firebaseMethods;
  const [loading, setLoading] = useState(false);
  const [emailInUseError, setEmailInUseError] = useState(false);
  const [status, setStatus] = useState(false);

  const handleSignIn = values => {
    const {name, email, password} = values;
    setStatus('loading');
    signInWithNameEmailAndPassword(name, email, password, navigation)
      .then(() => {
        setEmailInUseError(false);
        setStatus('signedUp');
      })
      .catch(() => {
        setEmailInUseError(true);
        setStatus('false');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <MainContainer>
      {status === 'loading' && <LoadingPage status={'loading'} />}
      {status === 'signedUp' && (
        <LoadingPage
          status={'signedUp'}
          navigation={navigation}
          setStatus={setStatus}
        />
      )}
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
                isDisabled={!formProps.isValid}
                text={span('register')}
                onPress={formProps.handleSubmit}
              />
              <CustomButton
                text={span('registerGoogle')}
                onPress={() => onGoogleButtonPress(navigation)}
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
