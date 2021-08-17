import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LogIn, SignUp} from '../../containers';
import TabNavigator from '../Tab';

const Stack = createStackNavigator();

const listScreens = [
  {name: 'Home', component: TabNavigator},
  {name: 'SignUp', component: SignUp},
  {name: 'LogIn', component: LogIn},
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
