import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import {profileImg} from '../constants/img';

export const firebaseMethods = {
  onGoogleButtonPress: async navigation => {
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
  },
  signInWithNameEmailAndPassword: (name, email, password, navigation) => {
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
  },
  logInWithEmailAndPassword: (email, password, navigation) => {
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
  },

  LogOut: navigation => {
    auth().signOut().then(navigation.navigate('LogIn'));
  },


  getAllDogs: () => {
    return firestore()
      .collection('smallDogs')
      .get()
      .then(querySnapshot => {
        let dogsList = [];
        querySnapshot.forEach(documentSnapshot => {
          dogsList.push(documentSnapshot.data());
        });
        return dogsList;
      });
  },
  getDogsbySize: size => {
    return firestore()
      .collection('smallDogs')
      .where('size', '==', size)
      .get()
      .then(querySnapshot => {
        let dogsList = [];
        querySnapshot.forEach(documentSnapshot => {
          dogsList.push(documentSnapshot.data());
        });
        return dogsList;
      });
  },

  getLikedDogs: () => {
    return firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.exists) {
          return querySnapshot.data().dogsLiked;
        }
        return [];
      });
  },
  likeDog: dog => {
    return firestore()
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

          return true;
        }
      });
  },
  getProfile: () => {
    return firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          return documentSnapshot.data();
        }
      });
  },
  updateProfile: name => {
    firestore().collection('users').doc(auth().currentUser.uid).update({
      name: name,
    });
  },
};

const createAditionalData = (name, email) => {
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
