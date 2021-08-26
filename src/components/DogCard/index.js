import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {
  DogName,
  CardContainer,
  ImageContainer,
  StyledImage,
  InfoContainer,
  BottomView,
  ShelterText,
  UpperView,
  HeartIcon,
} from './styledComponents';

const DogCard = props => {
  const {name, shelter, photo} = props;
  const [isSelected, setSelection] = useState(false);
  return (
    <CardContainer>
      <ImageContainer>
        <StyledImage source={photo} />
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
              color={colors.brown}
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
