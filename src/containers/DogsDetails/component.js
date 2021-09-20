import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MainContainerDogsDetails} from './styledComponent';
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
} from '../../components/styled';
import {colors} from '../../library/constants';
import { ShelterModal} from '../../components';
import {useNavigation} from '@react-navigation/native';

export const DogsDetailsComponent = ({
  route,
  likeDog,
  getLikedDogs,
  favouriteDogs,
  validation,
  getDogsbySize,
}) => {
  const navigation = useNavigation();
  const {
    params: {dog: dogsData},
  } = route;

  const thisDogIsLiked = favouriteDogs.find(dog => dog === dogsData.name);

  return (
    <MainContainerDogsDetails>
      <DogDetailsContainer>
        <DogImageContainer>
          <DogImage source={{uri: dogsData.dogImg}} />
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
          <DogsName>{dogsData.name}</DogsName>
          <HeartIcon>
            <Icon
              onPress={() => {
                console.log();
                likeDog(dogsData.name).then(() =>
                  getLikedDogs().then(() => getDogsbySize(validation)),
                );
              }}
              color={colors.red}
              name={thisDogIsLiked ? 'favorite' : 'favorite-border'}
              size={45}
            />
          </HeartIcon>
          <DogsBreed> {dogsData.breed} </DogsBreed>
          <GenderText> {dogsData.sex} </GenderText>
          <BoxesContainer>
            <DataBox>
              <DataBoxText>Peso</DataBoxText>
              <DataBoxTextBold> {dogsData.weight} </DataBoxTextBold>
            </DataBox>
            <DataBox>
              <DataBoxText>Edad</DataBoxText>
              <DataBoxTextBold> {dogsData.age} </DataBoxTextBold>
            </DataBox>
            <DataBox>
              <DataBoxText>Talla</DataBoxText>
              <DataBoxTextBold>{dogsData.size}</DataBoxTextBold>
            </DataBox>
          </BoxesContainer>
          <StoryContainer>
            <StoryTitle>Información</StoryTitle>
            <StoryDetails>{dogsData.information}</StoryDetails>
          </StoryContainer>
          <OtherDetailsBoxContainer>
            <OtherDetailsContainer>
              <OtherDetailsTitle>Vacunas</OtherDetailsTitle>
              <OtherDetailsText>{dogsData.vaccines}</OtherDetailsText>
              <OtherDetailsTitle>Esterilización</OtherDetailsTitle>
              <OtherDetailsText>{dogsData.sterilized}</OtherDetailsText>
            </OtherDetailsContainer>
            <ShelterModal shelter={dogsData.shelter} />
          </OtherDetailsBoxContainer>
        </LowerDataContainer>
      </DogDetailsContainer>
    </MainContainerDogsDetails>
  );
};
