import auth from '@react-native-firebase/auth';

export const signInWithNameEmailAndPassword = (name, email, password) => {
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({user}) => {
        user
          .updateProfile({displayName: name})
          .then(() => resolve('User created & signed in'));
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
      });
  });
};