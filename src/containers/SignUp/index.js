import React from 'react';
import {View, SafeAreaView} from 'react-native';
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

const SignUp = ({navigation}) => {
  return (
    <MainContainer>
      <TopContainer>
        <DogImage />
      </TopContainer>
      <Formik>
        <InputContainer>
          <TextInputField label={span('name')} />
          <TextInputField label={span('email')} />
          <TextInputField label={span('password')} />
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
      </Formik>
    </MainContainer>
  );
};

export default SignUp;
