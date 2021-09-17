import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {Button, Image} from 'react-native';
import {MainContainer} from '../SignUp/styledComponents';

const Skip = ({...props}) => <Button title="Skip" color="#000000" {...props} />;
const Next = ({...props}) => <Button title="Next" color="#000000" {...props} />;

const OnboardingScreen = ({navigation}) => {
  return (
    <MainContainer>
      <Onboarding
        // SkipButtonComponent={Skip}
        // NextButtonComponent={Next}
        onSkip={() => navigation.replace('SignUp')}
        onDone={() => navigation.replace('SignUp')}
        pages={[
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../constants/img/Welcome-Board.png')}
              />
            ),
            title: 'Onboarding 1',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../constants/img/Adopt-a-friend.png')}
              />
            ),
            title: 'Onboarding 2',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: (
              <Image
                source={require('../../constants/img/Adopt-a-friend.png')}
              />
            ),
            title: 'Onboarding 2',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </MainContainer>
  );
};

export default OnboardingScreen;
