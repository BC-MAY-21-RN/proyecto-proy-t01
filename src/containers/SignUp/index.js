import React from 'react';
import {View, SafeAreaView, TextInput, Text} from 'react-native';
import {Formik} from 'formik';
import Span, {span} from '../../i18n/es';
import {
  CheckBoxField,
  TextInputField,
  CustomButton,
  TextLink,
} from '../../components';
import {signUpValidationSchema} from '../../constants/schemas/signupSchema';

const SignUp = ({navigation}) => {
  return (
    <SafeAreaView>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          name: '',
          email: '',
          password: '',
          agreeTerms: false,
        }}
        validateOnMount={true}
        onSubmit={values => console.log(values)}>
        {formProps => (
          <>
            <TextInputField
              {...formProps}
              formControlName={'name'}
              label={span('name')}
            />

            <TextInputField
              {...formProps}
              formControlName={'email'}
              label={span('email')}
            />
          </>
        )}
      </Formik>

      {/*
      <Formik
      validationSchema={signUpValidationSchema}
      initialValues={{name: '', email: '', password: '', agreeTerms: false}}
      validateOnMount={true}
      onSubmit={values => console.log(values)}> {
        
      }
        (formProps) => (
        <View>
          <TextInputField {...formProps} label={<Span text="name" />} 


</View> 

<TextInputField label={<Span text="email" />} />
          <TextInputField label={<Span text="password" />} />
          <CheckBoxField label={<Span text="terms" />} />
          <CustomButton text={<Span text="register" />} />
          <CustomButton text={<Span text="registerGoogle" />} />
          <TextLink
            navigation={navigation}
            screen="LogIn"
            text={<Span text="alreadyAccount" />}
            />
        </View>
        )}
          */}
    </SafeAreaView>
  );
};

export default SignUp;
