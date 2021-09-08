import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors';
import {pets} from '../../constants/pets.json';
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
  const {id, name, shelter, image, liked} = props;
  const [isSelected, setSelection] = useState(false);
  // console.log(liked);

  // function setLiked(id, liked) {
  //   for (var i = 0; i < pets.length; i++) {
  //     // console.log(pets[i].liked);
  //     if (pets[i].id === id) {
  //       console.log(pets[i].liked);
  //       pets[i].liked = liked;
  //       console.log(pets[i].liked);
  //       return;
  //     }
  //   }
  // }

  return (
    <CardContainer>
      <ImageContainer>
        <StyledImage source={{uri: image}} />
      </ImageContainer>
      <InfoContainer>
        <UpperView>
          <DogName>{name}</DogName>
        </UpperView>
        <BottomView>
          <ShelterText>{shelter}</ShelterText>
          <HeartIcon>
            <Icon
              onPress={() => {
                setSelection(!isSelected);
                setLiked(id, !liked);
              }}
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
