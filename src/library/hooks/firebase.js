import {useEffect} from 'react';
import {WEB_CLIENT_ID} from '@env';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const useGoogleConfiguration = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);
};
