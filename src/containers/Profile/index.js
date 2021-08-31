import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Formik} from 'formik';
import {span} from '../../i18n/es';
import {signUpValidationSchema} from '../../constants/schemas/signUpValidationSchema';
import {signInWithNameEmailAndPassword} from '../../components/helpers/firebaseSignUp';
import {CustomButton} from '../../components';
import {LogOut} from '../../components/helpers/firebaseSignUp';
import {defaultPhoto} from '../../constants/img';
import {
  MainContainerProfile,
  ProfileContainer,
  ProfileImage,
  InputContainerProfile,
  ButtonContainerProfile,
  ProfileIcon,
  LogOutContainer,
  LogOutText,
  UserName,
  UserEmail,
} from './styledComponents';

const Profile = ({navigation}) => {
  const handleSignIn = values => {
    const {name, password} = values;
    signInWithNameEmailAndPassword(name, password);
  };

  const [userData, setUserData] = useState();
  const getUsers = () => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <MainContainerProfile>
      <ProfileContainer>
        <LogOutContainer>
          <ProfileIcon name="logout" />
          <LogOutText onPress={() => LogOut(navigation)}>Salir</LogOutText>
        </LogOutContainer>
        <ProfileImage
          source={{
            uri: userData ? userData.userImg : defaultPhoto,
          }}
        />
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
              <UserName>{userData ? userData.name : ''}</UserName>
              <UserEmail>{userData ? userData.email : ''}</UserEmail>
              <ButtonContainerProfile>
                <CustomButton
                  text={span('editProfile')}
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
