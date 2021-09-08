import React from 'react';
import {DogCard} from '../../components/';
import {FlatList} from 'react-native';

const PetList = ({list}) => {
  return (
    <FlatList
      data={list}
      renderItem={({item}) => <DogCard {...item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default PetList;
