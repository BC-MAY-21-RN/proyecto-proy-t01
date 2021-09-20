import 'react-native-gesture-handler';
import React from 'react';

import {useGoogleConfiguration} from './src/components/helpers/firebaseSignUp';
import {ScreenNavigator} from './src/navigators';
import withRedux from './src/library/redux';

const App = () => {
  useGoogleConfiguration();
  return (
    <>
      <ScreenNavigator />
    </>
  );
};

export default withRedux(App);
