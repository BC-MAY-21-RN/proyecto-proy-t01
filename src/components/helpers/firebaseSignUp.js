import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {WEB_CLIENT_ID} from '@env';

export const useGoogleConfiguration = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
    });
  }, []);
};

export const onGoogleButtonPress = async navigation => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  await auth()
    .signInWithCredential(googleCredential)
    .then(response => {
      if (response) {
        createAditionalData();
      }
    });
};

export const signInWithNameEmailAndPassword = (name, email, password) => {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user
          .updateProfile({displayName: name})
          .then(
            () => resolve('User created & signed in'),
            createAditionalData(name, email),
          );
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }
      });
  });
};

export const logInWithEmailAndPassword = (email, password) => {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve('User signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          reject('Wrong email/password');
        }
        if (error.code === 'auth/invalid-email') {
          reject('That email address is invalid!');
        }
        if (error.code === 'auth/user-not-found') {
          reject('User not found');
        }
      });
  });
};

export const createAditionalData = (name, email) => {
  firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .set({
      name: name || auth().currentUser.displayName,
      email: email || auth().currentUser.email,
      userImg:
        'https://lh3.googleusercontent.com/proxy/gHfVvxH9z27U1VQAYdmTwgZs1uQV4fMqQMQtDAntMgbvdclaFM1mg0dzyrG2tAXQ0ANQN9F4PtD49bGlLY89BLGQZ_SZPrE9tUG23M8hOHwP3QzXU7WtTlP-pcOGqYKiRgcWwyPeugC98F4-JYRo9Dof50qe',
    });
};
