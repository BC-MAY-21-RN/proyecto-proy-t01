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
  ShelterBoxContainer,
  ShelterContainer,
  ShelterTitle,
  ShelterName,
  ShelterContactButton,
  ShelterContactButtonText,
} from './styledComponent';

const DogDetails = props => {
  const {photo} = props;
  const [isSelected, setSelection] = useState(false);

  return (
    <DogDetailsContainer>
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
              <DataBoxText>Color</DataBoxText>
              <DataBoxTextBold>Café</DataBoxTextBold>
            </DataBox>
          </BoxesContainer>
          <StoryContainer>
            <StoryTitle>Información</StoryTitle>
            <StoryDetails>
              Es sociable, carácter juguetón y le gusta estar acompañado, juega
              a la pelota. Convive bien con otros perros y niños. Max está
              desparasitado, vacunado y esterilizado.
            </StoryDetails>
          </StoryContainer>
          <ShelterBoxContainer>
            <ShelterContainer>
              <ShelterTitle>Refugio</ShelterTitle>
              <ShelterName>Latidos Caninos</ShelterName>
            </ShelterContainer>
            <ShelterContactButton>
              <ShelterContactButtonText>Contáctanos</ShelterContactButtonText>
            </ShelterContactButton>
          </ShelterBoxContainer>
        </LowerDataContainer>
      </StyledImage>
    </DogDetailsContainer>
  );
};

export default DogDetails;
