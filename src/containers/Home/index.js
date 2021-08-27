import {DogCard} from '../../components';
import {ScrollView} from 'react-native';
import {SectionList} from '../../components';
import {MainContainerHome} from './styledComponents';
import React from 'react';

const Home = () => {
  return (
    <MainContainerHome>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionList />
        <DogCard
          name="Paco"
          photo={require('../../constants/img/dogAdopt.png')}
          shelter="Latidos Caninos"
        />
        <DogCard
          name="Max"
          photo={require('../../constants/img/dogAdopt2.png')}
          shelter="San Cristobal"
        />
        <DogCard
          name="Lola"
          photo={require('../../constants/img/dogAdopt3.png')}
          shelter="Latidos Caninos"
        />
        <DogCard
          name="Rocky"
          photo={require('../../constants/img/dogAdopt4.png')}
          shelter="Amor Sin Raza"
        />
        <DogCard
          name="Matilda"
          photo={require('../../constants/img/dogAdopt5.png')}
          shelter="Amor Sin Raza"
        />
      </ScrollView>
    </MainContainerHome>
  );
};

export default Home;
