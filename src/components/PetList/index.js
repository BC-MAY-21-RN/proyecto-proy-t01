import React from 'react';
import {DogCard} from '../../components';
import {FlatList} from 'react-native';

const PetList = ({dogsData}) => {
  return (
    <FlatList
      data={dogsData}
      renderItem={({item}) => <DogCard {...item} />}
      keyExtractor={item => item.name}
    />
  );
};

export default PetList;
