import React from 'react';
import {span} from '../../i18n/es';
import {CustomButton} from '../../components';
import {LogOut} from '../../components/helpers/firebaseSignUp';

const Profile = ({navigation}) => {
  return (
    <CustomButton text={span('logout')} onPress={() => LogOut(navigation)} />
  );
};

export default Profile;

export const profilePic =
  'https://www.netclipart.com/pp/m/197-1979569_no-profile.png';
