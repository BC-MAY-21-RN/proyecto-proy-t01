import React, {useState, useEffect} from 'react';
import DogDetails from './../../components/DogDetails/index';
import {MainContainerDogsDetails} from './styledComponent';
import firestore from '@react-native-firebase/firestore';
import {
  DogDetailsContainer,
  StyledImage,
  LowerDataContainer,
  DogsName,
  DogsBreed,
  HeartIcon,
  GenderText,
  BoxesContainer,
  DataBox,
  DataBoxText,
  DataBoxTextBold,
  StoryContainer,
  StoryTitle,
  StoryDetails,
  OtherDetailsBoxContainer,
  OtherDetailsContainer,
  OtherDetailsTitle,
  OtherDetailsText,
  ShelterContactButton,
  ShelterContactButtonText,
} from './../../components/DogDetails/styledComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './../../constants/colors';

const DogsDetails = props => {
  const {
    route: {
      params: {name},
    },
  } = props;
  const [dogsdata, setDogsData] = useState({});
  const getDogs = dogID => {
    firestore()
      .collection('smallDogs')
      .where('name', '==', `${dogID}`)
      .get()
      .then(querySnapshot => {
        let dogsList = [];
        querySnapshot.forEach(documentSnapshot => {
          dogsList.push(documentSnapshot.data());
          // console.log(...dogsList);
          // console.log(dogsList[0].breed);
          setDogsData(dogsList[0]);
        });
        // console.log(setDogsData);
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
