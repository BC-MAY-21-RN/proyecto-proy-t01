import React from 'react';
import {PetList} from '../../components';
import {MainContainerFav} from './styledComponents';
import {pets} from '../../constants/pets.json';

const Favorites = () => {
  const favs = pets.filter(pet => pet.liked === true);

  return (
    <MainContainerFav>
      <PetList list={favs} />
    </MainContainerFav>
  );
};

export default Favorites;
