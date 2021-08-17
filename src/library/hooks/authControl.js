import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const signInWithNameEmailAndPassword = (name, email, password) => {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user
          .updateProfile({displayName: name})
          .then(
            () => resolve('User created & signed in'),
            createAditionalData(),
            console.log("VALORES:", name, email, password)
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

const createAditionalData = () => {
  firestore().collection('users').doc(auth().currentUser.uid).set({
    name: auth().currentUser.displayName,
    userImg: 'https://lh3.googleusercontent.com/proxy/gHfVvxH9z27U1VQAYdmTwgZs1uQV4fMqQMQtDAntMgbvdclaFM1mg0dzyrG2tAXQ0ANQN9F4PtD49bGlLY89BLGQZ_SZPrE9tUG23M8hOHwP3QzXU7WtTlP-pcOGqYKiRgcWwyPeugC98F4-JYRo9Dof50qe'
  });
    // .then(() => {
    //   findAdditionalData();
    // });
};

// const findAdditionalData=()=>{
//   firestore()
//     .collection('reservas')
//     .doc(auth().currentUser.uid)
//     .get()
//     .then(resp => {
//       if (!resp.exists) {
//         firestore().collection('reservas').doc(auth().currentUser.uid).set({
//           flights: [],
//         });
//     }
//   });
// }
