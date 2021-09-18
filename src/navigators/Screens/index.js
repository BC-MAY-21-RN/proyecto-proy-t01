import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogIn, SignUp, DogsDetails, Onboarding} from '../../containers';
import TabNavigator from '../Tab';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const listScreens = [
  {name: 'Onboarding', component: Onboarding},
  {name: 'LogIn', component: LogIn},
  {name: 'Home', component: TabNavigator},
  {name: 'SignUp', component: SignUp},
  {name: 'DogsDetails', component: DogsDetails},
  {name: 'Profile', component: TabNavigator},
  {name: 'Favorites', component: TabNavigator},
];

const screens = listScreens.map(({name, component}) => (
  <Stack.Screen key={name} name={name} component={component} />
));

const ScreenNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  /* If state is FirstLaunch will open onboarding screen, otherwise sends user to Login */
  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header: () => null}}>
          {screens}
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LogIn />;
  }
};

export default ScreenNavigator;
