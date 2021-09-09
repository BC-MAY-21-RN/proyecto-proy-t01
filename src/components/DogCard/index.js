import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
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
import {nullBckg} from '../../constants/img';

const DogCard = (props) => {
  const [isSelected, setSelection] = useState(false);
  const dogsData =props
  return (
    <CardContainer>
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
              onPress={() => setSelection(!isSelected)}
              color={colors.red}
              name={isSelected ? 'favorite' : 'favorite-border'}
              size={24}
            />
          </HeartIcon>
        </BottomView>
      </InfoContainer>
    </CardContainer>
  );
};

export default DogCard;
