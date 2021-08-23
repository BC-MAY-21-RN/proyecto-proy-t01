import React, {useState} from 'react';
import {Formik} from 'formik';
import {span} from '../../i18n/es';
import {signUpValidationSchema} from '../../constants/schemas/signUpValidationSchema';
import {signInWithNameEmailAndPassword} from '../../components/helpers/firebaseSignUp';
import {TextInputField, CustomButton} from '../../components';
import {LogOut} from '../../components/helpers/firebaseSignUp';
import {
  MainContainerProfile,
  ProfileContainer,
  ProfileImage,
  InputContainerProfile,
  InputTextContainerProfile,
  ButtonContainerProfile,
  ProfileIcon,
  LogOutContainer,
  LogOutText,
} from './styledComponents';

const Profile = ({navigation}) => {
  const handleSignIn = values => {
    const {name, password} = values;
    signInWithNameEmailAndPassword(name, password);
  };

  return (
    <MainContainerProfile>
      <ProfileContainer>
        <LogOutContainer>
          <ProfileIcon name="logout" />
          <LogOutText onPress={() => LogOut(navigation)}>Salir</LogOutText>
        </LogOutContainer>
        <ProfileImage source={require('../../constants/img/profile.jpg')} />
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            name: '',
            password: '',
          }}
          validateOnMount={true}
          onSubmit={values => handleSignIn(values)}>
          {formProps => (
            <InputContainerProfile>
              <InputTextContainerProfile>
                <TextInputField
                  {...formProps}
                  formControlName={span('nameLow')}
                  label={span('name')}
                  icon="person"
                />
                <TextInputField
                  {...formProps}
                  formControlName={span('passwordLow')}
                  label={span('password')}
                  isPassword
                />
              </InputTextContainerProfile>
              <ButtonContainerProfile>
                <CustomButton
                  text={span('update')}
                  onPress={formProps.handleSubmit}
                />
              </ButtonContainerProfile>
            </InputContainerProfile>
          )}
        </Formik>
      </ProfileContainer>
    </MainContainerProfile>
  );
};

export default Profile;
