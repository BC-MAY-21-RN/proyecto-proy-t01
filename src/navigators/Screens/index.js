import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogIn, SignUp, DogsDetails, Onboarding} from '../../containers';
import TabNavigator from '../Tab';

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
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        {screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenNavigator;
