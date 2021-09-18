import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {MainContainer} from '../SignUp/styledComponents';
import {
  SkipStyled,
  NextStyled,
  DoneButtonComponent,
  Dots,
} from './styledComponent';
import {Title} from 'react-native-paper';

const OnboardingScreen = ({navigation}) => {
  return (
    // <MainContainer>
    <Onboarding
      SkipButtonComponent={SkipStyled}
      NextButtonComponent={NextStyled}
      bottomBarColor={'#f5737D'}
      DotComponent={Dots}
      DoneButtonComponent={DoneButtonComponent}
      onSkip={() => navigation.replace('SignUp')}
      onDone={() => navigation.navigate('SignUp')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../constants/img/Onboarding-Card-1.png')}
            />
          ),
          title: null,
          subtitle: null,
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../constants/img/Onboarding-Card-2.png')}
            />
          ),
          title: null,
          subtitle: null,
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../constants/img/Onboarding-Card-3.png')}
            />
          ),
          title: null,
          subtitle: null,
        },
      ]}
    />
    // </MainContainer>
  );
};

export default OnboardingScreen;
