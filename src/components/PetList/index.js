import React from 'react';
import {DogCard} from '../../components/';
import {FlatList} from 'react-native';

const PetList = ({size}) => {
  return (
    <FlatList
      data={size}
      renderItem={({item}) => <DogCard {...item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default PetList;
