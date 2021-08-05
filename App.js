import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, LogIn, SignUp} from './src/containers';

const Stack = createStackNavigator();

const listScreens = [
  {name: 'SignUp', component: SignUp},
  {name: 'LogIn', component: LogIn},
  // {name: 'Home', component: Home},
];

const screens = listScreens.map(({name, component}) => (
  <Stack.Screen key={name} name={name} component={component} />
));

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null}}>
        {screens}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
