import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {WEB_CLIENT_ID} from '@env';
import {profileImg} from '../../constants/img';

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
        navigation.navigate('Home');
      }
    });
};

export const signInWithNameEmailAndPassword = (
  name,
  email,
  password,
  navigation,
) => {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user
          .updateProfile({displayName: name})
          .then(
            () => resolve('User created & signed in'),
            createAditionalData(name, email, profileImg),
            navigation.navigate('LogIn'),
          );
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          reject('That email address is already in use!');
        }
      });
  });
};

export const logInWithEmailAndPassword = (email, password, navigation) => {
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve('User signed in!');
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/wrong-password') {
          reject('Wrong email/password');
        } else if (error.code === 'auth/invalid-email') {
          reject('That email address is invalid!');
        } else if (error.code === 'auth/user-not-found') {
          reject('User not found');
        }
      });
  });
};

export const createAditionalData = (name, email) => {
  firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .get()
    .then(response => {
      if (!response.exists) {
        firestore()
          .collection('users')
          .doc(auth().currentUser.uid)
          .set({
            name: name || auth().currentUser.displayName,
            email: email || auth().currentUser.email,
            userImg: auth().currentUser.photoURL || profileImg,
            dogsLiked: [],
          });
      }
    });
};

export const LogOut = navigation => {
  auth().signOut().then(navigation.navigate('LogIn'));
};

export const getDogs = ({filter, validation, setDogsData}) => {
  firestore()
    .collection('smallDogs')
    .where(filter, '==', validation)
    .get()
    .then(querySnapshot => {
      let dogsList = [];
      querySnapshot.forEach(documentSnapshot => {
        dogsList.push(documentSnapshot.data());
      });
      setDogsData(dogsList);
    });
};

export const getAllDogs = setDogsData => {
  firestore()
    .collection('smallDogs')
    .get()
    .then(querySnapshot => {
      let dogsList = [];
      querySnapshot.forEach(documentSnapshot => {
        dogsList.push(documentSnapshot.data());
      });
      setDogsData(dogsList);
    });
};

export const getLikedDogs = setDogsData => {
  firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .get()
    .then(querySnapshot => {
      if (querySnapshot.exists) {
        setDogsData(querySnapshot.data().dogsLiked);
      }
    });
};

export const likeDog = dog => {
  firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .get()
    .then(async documentSnapshot => {
      if (documentSnapshot.exists) {
        var collectionData = documentSnapshot.data();
        const listOfDogs = collectionData.dogsLiked;
        let newCollection = [];
        const dogExist = listOfDogs.find(item => item === dog);
        if (dogExist) {
          newCollection = listOfDogs.filter(item => item !== dog);
        } else {
          newCollection = [...listOfDogs, dog];
        }
        collectionData.dogsLiked = newCollection;
        await firestore()
          .collection('users')
          .doc(auth().currentUser.uid)
          .set(collectionData);
      }
    });
};
