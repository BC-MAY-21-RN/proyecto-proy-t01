import React, {useState, useEffect} from 'react';
import {PetList, Filters} from '../../components';
import {MainContainerHome} from './styledComponents';
import {getDogs, getLikedDogs} from '../../components/helpers/firebaseSignUp';

const Home = ({navigation}) => {
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

  return (
    <MainContainerHome>
      <Filters setSize={setValidationSize} />
      <PetList dogsData={allDogs} navigation={navigation} />
    </MainContainerHome>
  );
};

export default Home;
