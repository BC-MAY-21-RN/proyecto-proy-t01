import React, {useState} from 'react';
import {Formik} from 'formik';
import {span} from '../../i18n/es';
import {validationSchema} from '../../constants/schemas/validationSchema';
import {signInWithNameEmailAndPassword} from '../../library/hooks/authControl';
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
  const [emailInUseError, setEmailInUseError] = useState(false);
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
        validationSchema={validationSchema}
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
                icon="visibility"
              />
            </InputTextContainer>
            <CheckBoxField
              {...formProps}
              label={<Span text="terms" />}
              formControlName={span('agreeTermsLow')}
            />
            <ButtonContainer>
              <CustomButton
                text={span('register')}
                onPress={formProps.handleSubmit}
              />
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
