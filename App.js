import 'react-native-gesture-handler';
import React from 'react';
import {Screens, MyTabs} from './src/navigators';

const App = () => {
  useGoogleConfiguration();
  return (
    <>
      <Screens />
      {/* <MyTabs /> */}
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
