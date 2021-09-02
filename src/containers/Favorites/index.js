import React from 'react';
import {PetList} from '../../components';
import {MainContainerFav} from './styledComponents';

const Home = () => {
  return (
    <MainContainerFav>
      <PetList />
    </MainContainerFav>
  );
};

export default Home;
