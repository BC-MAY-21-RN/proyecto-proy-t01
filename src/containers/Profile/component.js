import React, { useEffect} from 'react';
import {span} from '../../library/i18n/es';
import {ModalUser} from '../../components';
import {LogOut} from '../../components/helpers/firebaseSignUp';

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
import {defaultPhoto} from '../../library/constants';

export const ProfileComponent = ({
  navigation,
  updateProfile,
  userData,
  getProfile,
}) => {
  useEffect(() => {
    getProfile();
  }, []);
  const handleUpdateProfile = name => {
      console.log(name);
    updateProfile(name).then(() => getProfile());
  };
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
            <ModalUser handleUpdateProfile={handleUpdateProfile} />
          </ButtonContainerProfile>
        </InputContainerProfile>
      </ProfileContainer>
    </MainContainerProfile>
  );
};
