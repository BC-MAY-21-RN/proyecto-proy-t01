import React from 'react';
import {Formik} from 'formik';
import {validationSchema} from '../../constants/schemas/validationSchema';
import {span} from '../../i18n/es';
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
  return (
    <MainContainerLog>
      <TopContainerLog>
        <DogImage />
      </TopContainerLog>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnMount={true}
        onSubmit={values => values}>
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
                formControlName={'password'}
                label={span('password')}
                icon="visibility"
              />
            </InputTextContainerLog>
            <ButtonContainerLog>
              <CustomButton text={span('login')} />
              <CustomButton text={span('loginGoogle')} />
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
