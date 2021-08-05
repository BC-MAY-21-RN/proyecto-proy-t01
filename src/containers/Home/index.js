import React from 'react';
import {View, Text} from 'react-native';
import {MainContainerHome, TextCustom} from './styledComponents';

const Home = ({navigation}) => {
  return (
    <MainContainerHome>
      <TextCustom>HOME</TextCustom>
    </MainContainerHome>
  );
};

export default Home;
