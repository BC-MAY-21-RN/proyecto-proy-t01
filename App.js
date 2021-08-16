import 'react-native-gesture-handler';
import React from 'react';

import {useGoogleConfiguration} from './src/components/helpers/firebaseSignUp';
import { ScreenNavigator,TabNavigator } from './src/navigators';

const App = () => {
  useGoogleConfiguration();
  return (
    <>
      <ScreenNavigator />
    </>
  );
  // (
  // <NavigationContainer>
  //   <Tab.Navigator
  //     screenOptions={{
  //       header: () => null,
  //       // tabBarIcon: props => {
  //       //   return <Icon name="people" size={props.size} color="#000" />;
  //       // },
  //     }}>
  //     {screens}
  //   </Tab.Navigator>
  // </NavigationContainer>
  // );
};

export default App;
