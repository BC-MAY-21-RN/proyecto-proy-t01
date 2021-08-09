import React from 'react';
import {View, SafeAreaView, TextInput, Text} from 'react-native';
import {Formik} from 'formik';
import Span from '../../i18n/es';
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
      {/* <Formik> */}
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{name: '', email: '', password: '', agreeTerms: false}}
        validateOnMount={true}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => (
          <View>
            <TextInputField
              label={<Span text="name" />}
              onChangeText={handleChange('name')}
            />

            {/* Input de prueba */}
            <View>
              <Text>Name</Text>
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {errors.name && touched.name && <Text>{errors.name}</Text>}
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
      </Formik>
    </SafeAreaView>
  );
};

export default SignUp;
