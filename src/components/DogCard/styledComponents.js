import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const CardContainer = styled.Pressable`
  border-radius: 25px;
  flex-direction: row;
  height: 120px;
  width: 350px;
  margin: 15px;
  padding: 10px;
  background-color: ${colors.white};
  margin-bottom: 15px;
`;

export const ImageContainer = styled.View`
  height: 120px;
  width: 120px;
  position: absolute;
  background-color: ${colors.box_pink};
  border-radius: 25px;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  margin-left: 125px;
  margin-top: 15px;
`;

export const UpperView = styled.View`
  margin-top: 12px;
`;

export const BottomView = styled.View`
  flex-direction: row;
`;

export const HeartIcon = styled.View`
  margin-left: 174px;
  position: absolute;
`;

export const StyledImage = styled.ImageBackground`
  width: 140px;
  height: 140px;
  margin-top: -20px;
  margin-left: -10px;
`;

export const DogName = styled.Text`
  color: ${colors.dark};
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  margin-right: 100px;
`;

export const ShelterText = styled.Text`
  color: ${colors.ligh_grey};
  font-size: 15px;
  font-family: 'Poppins-Medium';
`;
