import React, {useState, useEffect} from 'react';
import {PetList} from '../../components';
import {MainContainerFav} from './styledComponents';
import {
  getLikedDogs,
  getAllDogs,
} from '../../components/helpers/firebaseSignUp';

export const Favorites = ({navigation}) => {
  const [dogsData, setDogsData] = useState();
  const [allDogs, setAllDogs] = useState();

  const [finalList, setFinalList] = useState();

  useEffect(() => {
    getAllDogs(setAllDogs);
  }, []);

  useEffect(() => {
    getLikedDogs(setDogsData);
  }, []);

  useEffect(() => {
    if (dogsData && allDogs) {
      let localList = [];
      dogsData.map(item => {
        let itemFind = allDogs.find(element => element.name === item);

        if (itemFind) {
          localList.push(itemFind);
        }
        setFinalList(localList);
      });
    }
  }, [dogsData, allDogs]);

  return (
    <MainContainerFav>
      <PetList dogsData={finalList} navigation={navigation} />
    </MainContainerFav>
  );
};
