import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {MainContainer} from '../SignUp/styledComponents';

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(220, 67, 80, 1)' : 'rgba(255,255,255,1.5)';
  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};
const Skip = ({...props}) => (
  <TouchableOpacity
    title="Skip"
    color="#000"
    {...props}
    style={{marginHorizontal: 20, borderRadius: 20}}>
    <Text style={{fontSize: 20, color: '#fff'}}>Saltar</Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity
    title="Next"
    color="#f5737D"
    {...props}
    style={{marginHorizontal: 20}}>
    <Text style={{fontSize: 20, color: '#fff'}}>Siguiente</Text>
  </TouchableOpacity>
);
const DoneButtonComponent = ({...props}) => (
  <TouchableOpacity
    title="Next"
    color="#f5737D"
    {...props}
    style={{marginHorizontal: 20}}>
    <Text style={{fontSize: 20, color: '#fff'}}>Iniciar</Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <MainContainer>
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
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
            // title: 'Onboarding 1',
            // subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../constants/img/Onboarding-Card-2.png')}
              />
            ),
            // title: 'Onboarding 2',
            // subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../constants/img/Onboarding-Card-3.png')}
              />
            ),
            // title: '',
            // subtitle: '',
          },
        ]}
      />
    </MainContainer>
  );
};

export default OnboardingScreen;
