import {useEffect} from 'react';
import {WEB_CLIENT_ID} from '@env';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const useGoogleConfiguration = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);
};

export const useAuthChecker = navigation => {
  const onAuthStateChanged = user => {
    if (user) {
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
};
