import React from 'react';
import {MainContainerHome} from './styledComponents';
import {SectionList} from '../../components';

const Home = ({navigation}) => {
  return (
    <MainContainerHome>
      <SectionList />
    </MainContainerHome>
  );
};

export default Home;
