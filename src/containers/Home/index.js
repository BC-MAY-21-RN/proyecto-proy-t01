import React, {useState, useEffect} from 'react';
import {DogCard, Filters, SectionList, PetList} from '../../components';
import {MainContainerHome} from './styledComponents';
import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native';
const Home = () => {
  const [dogsData, setDogsData] = useState();
  const [size, setSize] = useState('Grande');
  const getDogs = () => {
    firestore()
      .collection('smallDogs')
      .where('size', '==', size)
      .get()
      .then(querySnapshot => {
        let dogsList = [];
        querySnapshot.forEach(documentSnapshot => {
          dogsList.push(documentSnapshot.data());
        });
        setDogsData(dogsList);
      });
  };

  useEffect(() => {
    getDogs();
  }, [size]);


  return (
    <MainContainerHome>
      <Filters setSize={setSize} />
      <FlatList
      data={dogsData}
      renderItem={({item}) => <DogCard {...item} />}
      keyExtractor={item => item.name}
    />
    
    </MainContainerHome>
  );
};

export default Home;
