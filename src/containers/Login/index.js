import React, {useState} from 'react';
import {Formik} from 'formik';
import {span} from '../../library/i18n/es';
import {
  TextInputField,
  CustomButton,
  TextLink,
  DogImage,
} from '../../components';
import {
  MainContainerLog,
  TopContainerLog,
  InputContainerLog,
  ButtonContainerLog,
  InputTextContainerLog,
} from './styledComponents';
import {logInValidationSchema} from '../../library/constants';
import {firebaseMethods} from '../../library/methods';

export const LogIn = ({navigation}) => {
  const {onGoogleButtonPress, logInWithEmailAndPassword} = firebaseMethods;
  const [authError, setAuthError] = useState(false);
  const handleLogIn = values => {
    const {email, password} = values;
    logInWithEmailAndPassword(email, password, navigation)
      .then(() => setAuthError(false))
      .catch(() => setAuthError(true));
  };
  return (
    <MainContainerLog>
      <TopContainerLog>
        <DogImage />
      </TopContainerLog>
      <Formik
        validationSchema={logInValidationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnMount={true}
        onSubmit={values => handleLogIn(values)}>
        {formProps => (
          <InputContainerLog>
            <InputTextContainerLog>
              <TextInputField
                {...formProps}
                formControlName={span('emailLow')}
                label={span('email')}
                icon="email"
              />
              <TextInputField
                {...formProps}
                formControlName={span('passwordLow')}
                label={span('password')}
                icon="visibility"
                authError={authError && span('wrongAuth')}
                isPassword
              />
            </InputTextContainerLog>
            <ButtonContainerLog>
              <CustomButton
                isDisabled={!formProps.isValid}
                text={span('login')}
                onPress={formProps.handleSubmit}
              />
              <CustomButton
                text={span('loginGoogle')}
                onPress={() => onGoogleButtonPress(navigation)}
              />
              <TextLink
                onPress={() => {
                  navigation.navigate('SignUp');
                }}
                text={span('dontAccount')}
              />
            </ButtonContainerLog>
          </InputContainerLog>
        )}
      </Formik>
    </MainContainerLog>
  );
};
