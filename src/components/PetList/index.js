import React from 'react';
import {DogCard} from '../../components';
import {FlatList} from 'react-native';

export const PetList = ({dogsData, navigation}) => {
  return (
    <FlatList
      data={dogsData}
      renderItem={({item}) => <DogCard {...item} navigation={navigation} />}
      keyExtractor={item => item.name}
    />
  );
};
