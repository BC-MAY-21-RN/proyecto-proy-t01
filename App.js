import 'react-native-gesture-handler';
import React from 'react';

import {useGoogleConfiguration} from './src/components/helpers/firebaseSignUp';
import {ScreenNavigator} from './src/navigators';

const App = () => {
  useGoogleConfiguration();
  return (
    <>
      <ScreenNavigator />
    </>
  );
};

export default App;
