import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './../../constants/colors';
import {
  DogDetailsContainer,
  LowerDataContainer,
  DogsName,
  DogsBreed,
  HeartIcon,
  GenderText,
  BoxesContainer,
  DataBox,
  DataBoxText,
  DataBoxTextBold,
  StoryContainer,
  StoryTitle,
  StoryDetails,
  OtherDetailsBoxContainer,
  OtherDetailsContainer,
  OtherDetailsTitle,
  OtherDetailsText,
  DogImage,
  DogImageContainer,
  BackIcon,
} from './styledComponent';
import {useNavigation} from '@react-navigation/native';
import {Icons, ShelterModal} from '..';

const DogsDetailsContainer = ({dogsdata}) => {
  const navigation = useNavigation();
  const {dogImg} = dogsdata;
  const [isSelected, setSelection] = useState(false);
  return (
    <DogDetailsContainer>
      <DogImageContainer>
        <DogImage source={{uri: dogImg}} />
        <BackIcon>
          <Icon
            onPress={() => navigation.navigate('Home')}
            color={colors.red}
            name={'arrow-back-ios'}
            size={45}
          />
        </BackIcon>
      </DogImageContainer>
        <LowerDataContainer>
        <DogsName>{dogsdata.name}</DogsName>
          <HeartIcon>
            <Icons
              navigation={() => setSelection(!isSelected)}
              color={colors.red}
              name={isSelected ? 'favorite' : 'favorite-border'}
              size={45}
            />
          </HeartIcon>
          <DogsBreed> {dogsdata.breed} </DogsBreed>
        <GenderText> {dogsdata.sex} </GenderText>
          <BoxesContainer>
            <DataBox>
              <DataBoxText>Peso</DataBoxText>
              <DataBoxTextBold> {dogsdata.weight} </DataBoxTextBold>
            </DataBox>
            <DataBox>
              <DataBoxText>Edad</DataBoxText>
              <DataBoxTextBold> {dogsdata.age} </DataBoxTextBold>
            </DataBox>
            <DataBox>
              <DataBoxText>Talla</DataBoxText>
              <DataBoxTextBold>{dogsdata.size}</DataBoxTextBold>
            </DataBox>
          </BoxesContainer>
          <StoryContainer>
            <StoryTitle>Información</StoryTitle>
            <StoryDetails>{dogsdata.information}</StoryDetails>
          </StoryContainer>
          <OtherDetailsBoxContainer>
          <OtherDetailsContainer>
            <OtherDetailsTitle>Vacunas</OtherDetailsTitle>
          <OtherDetailsText>{dogsdata.vaccines}</OtherDetailsText>
            <OtherDetailsTitle>Esterilización</OtherDetailsTitle>
            <OtherDetailsText>{dogsdata.sterilized}</OtherDetailsText>
          </OtherDetailsContainer>
          <ShelterModal shelter = {dogsdata.shelter}/>
        </OtherDetailsBoxContainer>
      </LowerDataContainer>
    </DogDetailsContainer>
  );
};

export default DogsDetailsContainer;
