import React, {useState} from 'react';
import {Formik} from 'formik';
import {span} from '../../i18n/es';
import {signUpValidationSchema} from '../../constants/schemas/signUpValidationSchema';
import {signInWithNameEmailAndPassword} from '../../library/hooks/authControl';
import {TextInputField, CustomButton} from '../../components';
import {
  MainContainerProfile,
  ProfileContainer,
  ProfileImage,
  InputContainerProfile,
  InputTextContainerProfile,
  ButtonContainerProfile,
  ProfileIcon,
} from './styledComponents';

const Profile = () => {
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
    <MainContainerProfile>
      <ProfileIcon name="logout" />
      <ProfileContainer>
        <ProfileImage source={require('../../constants/img/profile.jpg')} />
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            name: '',
            email: '',
            password: '',
            agreeTerms: true,
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
                  formControlName={span('emailLow')}
                  label={span('email')}
                  authError={emailInUseError && span('emailUsed')}
                  icon="email"
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
