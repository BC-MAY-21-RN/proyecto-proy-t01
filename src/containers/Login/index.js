import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
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
} from './styledComponents';

const LogIn = ({navigation}) => {
  return (
    <MainContainerLog>
      <TopContainerLog>
        <DogImage />
      </TopContainerLog>
      <Formik>
        <InputContainerLog>
          <TextInputField label={span('email')} />
          <TextInputField label={span('password')} />
          <ButtonContainerLog>
            <CustomButton text={span('login')} />
            <CustomButton text={span('loginGoogle')} />
            <TextLink
              navigation={navigation}
              screen="SignUp"
              text={span('dontAccount')}
            />
          </ButtonContainerLog>
        </InputContainerLog>
      </Formik>
    </MainContainerLog>
  );
};

export default LogIn;
