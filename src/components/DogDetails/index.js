import React, {useState, useEffect} from 'react';
import {
  DogDetailsContainer,
  StyledImage,
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
  ShelterContactButton,
  ShelterContactButtonText,
} from './../../components/DogDetails/styledComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './../../constants/colors';

const DogsDetailsContainer = ({dogsdata, photo}) => {
  const {dogImg} = dogsdata;
  const [isSelected, setSelection] = useState(false);

  return (
    <DogDetailsContainer>
      <StyledImage source={{uri: dogImg}}>
        <LowerDataContainer>
          <DogsName>{dogsdata.name}</DogsName>
          <HeartIcon>
            <Icon
              onPress={() => setSelection(!isSelected)}
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
            <ShelterContactButton>
              <ShelterContactButtonText>Contáctanos</ShelterContactButtonText>
            </ShelterContactButton>
          </OtherDetailsBoxContainer>
        </LowerDataContainer>
      </StyledImage>
    </DogDetailsContainer>
  );
};

export default DogsDetailsContainer;
