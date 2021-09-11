import React, {useState, useEffect} from 'react';
import DogDetails from './../../components/DogDetails/index';
import {MainContainerDogsDetails} from './styledComponent';
import firestore from '@react-native-firebase/firestore';

const DogsDetails = props => {
  const {
    route: {
      params: {name},
    },
  } = props;
  const [dogsdata, setDogsData] = useState({});
  const {dogImg} = dogsdata;

  const getDogs = dogID => {
    firestore()
      .collection('smallDogs')
      .where('name', '==', `${dogID}`)
      .get()
      .then(querySnapshot => {
        let dogsList = [];
        querySnapshot.forEach(documentSnapshot => {
          dogsList.push(documentSnapshot.data());
          setDogsData(dogsList[0]);
        });
      });
  };

  useEffect(() => {
    getDogs(name);
  }, []);

  return (
    <MainContainerDogsDetails>
      <DogDetails dogsdata={dogsdata} />
    </MainContainerDogsDetails>
  );
};

export default DogsDetails;
