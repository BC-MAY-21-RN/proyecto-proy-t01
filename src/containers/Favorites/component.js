import React, {useEffect} from 'react';
import {DogCard} from '../../components';
import {MainContainerFav} from './styledComponents';
import {FlatList} from 'react-native';

export const FavoritesComponent = ({
  navigation,
  getAllDogs,
  getLikedDogs,
  likeDog,
  allDogs,
  favouriteDogs,
  getDogsbySize,
  validation,
}) => {
  useEffect(() => {
    getAllDogs();
  }, [favouriteDogs]);
  useEffect(() => {
    getLikedDogs();
  }, []);

  const likedDogs = () => {
    let newDogslist = [];
    favouriteDogs.map(item => {
      const dog = allDogs.find(dog => dog.name === item);
      if (dog) {
        dog.liked = true;
        newDogslist.push(dog);
      }
      return item;
    });

    return newDogslist;
  };
  const handleLike = name => {
    likeDog(name).then(() => {
      getLikedDogs().then(() =>
        getAllDogs().then(() => getDogsbySize(validation)),
      );
    });
  };

  console.log(likedDogs());
  return (
    <MainContainerFav>
      <FlatList
        data={likedDogs()}
        renderItem={({item}) => (
          <DogCard likeDog={handleLike} {...item} navigation={navigation} />
        )}
        keyExtractor={item => item.name}
      />
    </MainContainerFav>
  );
};
