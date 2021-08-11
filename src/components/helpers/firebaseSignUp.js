import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';

export const useGoogleConfiguration = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '762122167762-rbe58eldje888bfbrsguhsuo2k1h81fm.apps.googleusercontent.com',
    });
  }, []);
};

export const onGoogleButtonPress = async navigation => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  await auth().signInWithCredential(googleCredential);
  // .then(response => {
  //   if (response) {
  //     createAditionalData();
  //     //   navigation.navigate('');
  //   }
  // });
};
