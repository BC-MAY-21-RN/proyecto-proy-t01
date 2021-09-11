import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './../../constants/colors';
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
  ImageCont,
} from './styledComponent';
import {ShelterModal, Icons} from '..';

const DogDetails = (props, {navigation}) => {
  const {photo} = props;
  const [isSelected, setSelection] = useState(false);
  return (
    <DogDetailsContainer>
      <Icon color={colors.red} name={'arrow-back-ios'} size={45} onPress={() => navigation.navigate('Home')}/> 
      <StyledImage source={photo}>
        <LowerDataContainer>
          <DogsName>Max</DogsName>
          <HeartIcon>
            <Icon
              onPress={() => setSelection(!isSelected)}
              color={colors.red}
              name={isSelected ? 'favorite' : 'favorite-border'}
              size={45}
            />
          </HeartIcon>
          <DogsBreed>Bull Terrier</DogsBreed>
          <GenderText>Macho</GenderText>
          <BoxesContainer>
            <DataBox>
              <DataBoxText>Peso</DataBoxText>
              <DataBoxTextBold>15 Kg</DataBoxTextBold>
            </DataBox>
            <DataBox>
              <DataBoxText>Edad</DataBoxText>
              <DataBoxTextBold>2 años</DataBoxTextBold>
            </DataBox>
            <DataBox>
              <DataBoxText>Talla</DataBoxText>
              <DataBoxTextBold>Mediana</DataBoxTextBold>
            </DataBox>
          </BoxesContainer>
          <StoryContainer>
            <StoryTitle>Información</StoryTitle>
            <StoryDetails>
              Es sociable, carácter juguetón y le gusta estar acompañado.
              Convive bien con otros perros y niños. Max está desparasitado,
              vacunado y esterilizado.
            </StoryDetails>
          </StoryContainer>
          <OtherDetailsBoxContainer>
            <OtherDetailsContainer>
              <OtherDetailsTitle>Vacunas</OtherDetailsTitle>
              <OtherDetailsText>Rabia, Parvovirus, Moquillo</OtherDetailsText>
              <OtherDetailsTitle>Esterilización</OtherDetailsTitle>
              <OtherDetailsText>Sí</OtherDetailsText>
            </OtherDetailsContainer>
              <ShelterModal/>
          </OtherDetailsBoxContainer>
        </LowerDataContainer>
      </StyledImage>
    </DogDetailsContainer>
  );
};

export default DogDetails;
