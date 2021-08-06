import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import Span from '../../i18n/es';
import {TextInputField, CustomButton, TextLink} from '../../components';

const LogIn = ({navigation}) => {
  return (
    <SafeAreaView>
      <Formik>
        <View>
          <TextInputField label={<Span text="email" />} />
          <TextInputField label={<Span text="password" />} />
          <CustomButton text={<Span text="login" />} />
          <CustomButton text={<Span text="loginGoogle" />} />
          <TextLink
            navigation={navigation}
            screen="SignUp"
            text={<Span text="dontAccount" />}
          />
        </View>
      </Formik>
    </SafeAreaView>
  );
};

export default LogIn;
