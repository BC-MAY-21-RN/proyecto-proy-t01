import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogIn, SignUp, DogsDetails} from '../../containers';
import TabNavigator from '../Tab';

const Stack = createStackNavigator();

const listScreens = [
  {name: 'LogIn', component: LogIn},
  {name: 'SignUp', component: SignUp},
  {name: 'Profile', component: TabNavigator},
  {name: 'Home', component: TabNavigator},
  {name: 'DogsDetails', component: DogsDetails},
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
