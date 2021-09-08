import React, {useState, useEffect} from 'react';
import {PetList} from '../../components';
import {MainContainerFav} from './styledComponents';
import {getDogs} from '../../components/helpers/firebaseSignUp';

const Favorites = () => {
  const [dogsData, setDogsData] = useState();
  const [validation, setValidationLiked] = useState(true);
  const filter = 'liked';

  useEffect(() => {
    getDogs({filter, validation, setDogsData});
  }, [validation]);

  return (
    <MainContainerFav>
      <PetList dogsData={dogsData} />
    </MainContainerFav>
  );
};

export default Favorites;
