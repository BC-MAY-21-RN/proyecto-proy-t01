import React, {useState, useEffect} from 'react';
import {Filters, DogCard} from '../../components';
import {MainContainerHome} from './styledComponents';
import {firebaseMethods} from '../../library/methods';
import {FlatList} from 'react-native';
export const Home = ({navigation}) => {
  const {getDogs, getLikedDogs} = firebaseMethods;
  const [dogsData, setDogsData] = useState();
  const [allDogs, setAllDogs] = useState();
  const [validation, setValidationSize] = useState('Grande');
  const [likedDogs, setLikedDogs] = useState();
  const filter = 'size';

  useEffect(() => {
    getDogs({filter, validation, setDogsData});
  }, [validation]);

  useEffect(() => {
    getLikedDogs(setLikedDogs);
  }, []);

  useEffect(() => {
    if (dogsData && likedDogs) {
      const newList = dogsData.map(item => {
        const finded = likedDogs.find(element => element === item.name);

        if (finded) {
          item.liked = true;
        } else {
          item.liked = false;
        }
        return item;
      });
      setAllDogs(newList);
    }
  }, []);
console.log("ALL DOGS",allDogs);
  return (
    <MainContainerHome>
      <Filters setSize={setValidationSize} />
      <FlatList
        data={allDogs}
        renderItem={({item}) => <DogCard {...item} navigation={navigation} />}
        keyExtractor={item => item.name}
      />
    </MainContainerHome>
  );
};
