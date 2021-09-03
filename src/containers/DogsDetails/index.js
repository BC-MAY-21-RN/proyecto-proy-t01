import React from 'react';
import DogDetails from './../../components/DogDetails/index';
import {MainContainerDogsDetails} from './styledComponent';

const DogsDetails = () => {
  return (
    <MainContainerDogsDetails>
      <DogDetails photo={require('../../constants/img/dogAdopt2.png')} />
    </MainContainerDogsDetails>
  );
};

export default DogsDetails;

//   photo={require('../../constants/img/dogAdopt2.png')}
