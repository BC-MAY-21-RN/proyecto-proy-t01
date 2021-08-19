import React, {useState} from 'react';
import {Formik} from 'formik';
import {logInWithEmailAndPassword} from '../../components/helpers/firebaseSignUp';
import {logInValidationSchema} from '../../constants/schemas/logInValidationSchema';
import {span} from '../../i18n/es';
import {onGoogleButtonPress} from '../../components/helpers/firebaseSignUp';
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

const LogIn = ({navigation}) => {
  const [authError, setAuthError] = useState(false);

  const handleLogIn = values => {
    const {email, password} = values;
    logInWithEmailAndPassword(email, password)
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
                text={span('login')}
                onPress={formProps.handleSubmit}
              />
              <CustomButton
                text={span('loginGoogle')}
                onPress={() => onGoogleButtonPress()}
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

export default LogIn;
