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

const DogCard = props => {
  const {name, shelter, image} = props;
  const [isSelected, setSelection] = useState(false);
  return (
    <CardContainer>
      <ImageContainer>
        <StyledImage source={{ uri: image}} />
      </ImageContainer>
      <InfoContainer>
        <UpperView>
          <DogName>{name}</DogName>
        </UpperView>
        <BottomView>
          <ShelterText>{shelter}</ShelterText>
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
