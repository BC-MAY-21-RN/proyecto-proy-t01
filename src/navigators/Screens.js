import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TabNavigator} from '.';
import {LogIn, SignUp, DogsDetails, OnboardingScreen} from '../containers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const listScreens = [
  {name: 'LogIn', component: LogIn},
  {name: 'Home', component: TabNavigator},
  {name: 'SignUp', component: SignUp},
  {name: 'Profile', component: TabNavigator},
  {name: 'DogsDetails', component: DogsDetails},
  {name: 'Favorites', component: TabNavigator},
];
const listScreensWithOnboard = [
  {name: 'Onboarding', component: OnboardingScreen},
  ...listScreens,
];

export const ScreenNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  /* If state is FirstLaunch will open onboarding screen, otherwise sends user to Login */
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  let screens = null;
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    screens = listScreensWithOnboard.map(({name, component}) => (
      <Stack.Screen key={name} name={name} component={component} />
    ));
  } else {
    screens = listScreens.map(({name, component}) => (
      <Stack.Screen key={name} name={name} component={component} />
    ));
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        {screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
