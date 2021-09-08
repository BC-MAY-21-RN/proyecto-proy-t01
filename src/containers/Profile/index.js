import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import {span} from '../../i18n/es';
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
  const [userData, setUserData] = useState();
  const getUsers = () => {
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data());
          console.log(documentSnapshot.data());
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
          <LogOutText onPress={() => LogOut(navigation)}>
            {span('exit')}
          </LogOutText>
        </LogOutContainer>
        <ProfileImage
          source={{
            uri: userData ? userData.userImg : defaultPhoto,
          }}
        />
        <InputContainerProfile>
          <UserName>{userData ? userData.name : ''}</UserName>
          <UserEmail>{userData ? userData.email : ''}</UserEmail>
          <ButtonContainerProfile>
            <CustomButton text={span('editProfile')} />
          </ButtonContainerProfile>
        </InputContainerProfile>
      </ProfileContainer>
    </MainContainerProfile>
  );
};

export default Profile;
