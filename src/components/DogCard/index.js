import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors, nullBckg} from '../../library/constants';
import {
  BottomView,
  CardContainer,
  DogName,
  HeartIcon,
  ImageContainer,
  InfoContainer,
  ShelterText,
  StyledImage,
  UpperView,
} from './styledComponents';
export const DogCard = ({navigation, likeDog, ...rest}) => {
  const dogsData = rest;

  return (
    <CardContainer
      onPress={() => {
        navigation.navigate('DogsDetails', {
          dog: {...dogsData},
        });
      }}>
      <ImageContainer>
        <StyledImage source={{uri: dogsData ? dogsData.dogImg : nullBckg}} />
      </ImageContainer>
      <InfoContainer>
        <UpperView>
          <DogName>{dogsData ? dogsData.name : ''}</DogName>
        </UpperView>
        <BottomView>
          <ShelterText>{dogsData ? dogsData.shelter : ''}</ShelterText>
          <HeartIcon>
            <Icon
              onPress={() => likeDog(dogsData.name)}
              color={colors.red}
              name={dogsData.liked ? 'favorite' : 'favorite-border'}
              size={24}
            />
          </HeartIcon>
        </BottomView>
      </InfoContainer>
    </CardContainer>
  );
};
