import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Image} from 'react-native';
import {
  SkipStyled,
  NextStyled,
  DoneButtonComponent,
  Dots,
} from './styledComponent';
import {onboard1, onboard2, onboard3} from '../../library/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={SkipStyled}
      NextButtonComponent={NextStyled}
      bottomBarColor={'#f5737D'}
      DotComponent={Dots}
      DoneButtonComponent={DoneButtonComponent}
      onSkip={() => navigation.replace('SignUp')}
      onDone={() => {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        navigation.navigate('SignUp');
      }}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={onboard1} />,
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={onboard2} />,
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={onboard3} />,
          title: '',
          subtitle: '',
        },
      ]}
    />
  );
};
