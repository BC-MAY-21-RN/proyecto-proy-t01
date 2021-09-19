import React, {useState, useEffect} from 'react';
import {Filters, DogCard} from '../../components';
import {MainContainerHome} from './styledComponents';
import {FlatList} from 'react-native';

export const HomeComponent = ({
  navigation,
  dogsFiltered,
  favouriteDogs,
  getDogsbySize,
  getLikedDogs,
  likeDog,
  validation,
  setValidationSize,
}) => {
  useEffect(() => {
    getDogsbySize(validation);
  }, [validation]);

  useEffect(() => {
    getLikedDogs();
  }, []);

  const allDogs = dogsFiltered.map(dog => {
    const isFavourite = favouriteDogs.find(favDog => favDog === dog.name);
    if (isFavourite) {
      dog.liked = true;
    }
    return dog;
  });

  const handleLike = name => {
    likeDog(name).then(() => {
      getLikedDogs().then(() => getDogsbySize(validation));
    });
  };

  return (
    <MainContainerHome>
      <Filters setSize={setValidationSize} />
      <FlatList
        data={allDogs}
        renderItem={({item}) => (
          <DogCard likeDog={handleLike} {...item} navigation={navigation} />
        )}
        keyExtractor={item => item.name}
      />
    </MainContainerHome>
  );
};
