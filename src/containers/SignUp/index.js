import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Formik} from 'formik';
import Span, {span} from '../../i18n/es';
import {
  CheckBoxField,
  TextInputField,
  CustomButton,
  TextLink,
} from '../../components';
import {validationSchema} from '../../constants/schemas/validationSchema';
import {signInWithNameEmailAndPassword} from '../../library/hooks/authControl';

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
    <SafeAreaView>
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
          <>
            <TextInputField
              {...formProps}
              formControlName={span('nameLow')}
              label={span('name')}
            />

            <TextInputField
              {...formProps}
              formControlName={span('emailLow')}
              label={span('email')}
              authError={emailInUseError && span('emailUsed')}
            />
            <TextInputField
              {...formProps}
              formControlName={span('passwordLow')}
              label={span('password')}
            />
            <CheckBoxField
              {...formProps}
              label={<Span text="terms" />}
              formControlName={span('agreeTermsLow')}
            />

            <CustomButton
              text={<Span text="register" />}
              onPress={formProps.handleSubmit}
            />
            <CustomButton text={<Span text="registerGoogle" />} />
            <TextLink
              navigation={navigation}
              screen="LogIn"
              text={<Span text="alreadyAccount" />}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;
