import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {
  MainContainerHome,
  DogName,
  DogContainer,
  ImageContainer,
  StyledImage,
  InfoContainer,
  BottomView,
  ShelterText,
  UpperView,
} from './styledComponents';

const Home = ({navigation}) => {
  return (
    <MainContainerHome>
      <DogContainer>
        <ImageContainer />
        <InfoContainer>
          <UpperView>
            <DogName>Paco</DogName>
            <Icon color={colors.pink} name="favorite" size={24} />
          </UpperView>
          <BottomView>
            <ShelterText>Patitas de Amor</ShelterText>
          </BottomView>
        </InfoContainer>
      </DogContainer>
      <StyledImage source={require('../../constants/img/dogAdopt.png')} />
    </MainContainerHome>
  );
};

export default Home;
