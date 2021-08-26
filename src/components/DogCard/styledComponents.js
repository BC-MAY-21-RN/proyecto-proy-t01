import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const CardContainer = styled.View`
  border-radius: 25px;
  flex-direction: row;
  height: 120px;
  margin: 35px;
  padding: 15px;
  background-color: ${colors.white};
  margin-bottom: 0px;
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
  margin-left: 120px;
  margin-top: 15px;
`;

export const UpperView = styled.View`
  margin-top: 12px;
`;

export const BottomView = styled.View`
  flex-direction: row;
`;

export const HeartIcon = styled.View`
  margin-left: 160px;
  position: absolute;
`;

export const StyledImage = styled.ImageBackground`
  width: 140px;
  height: 140px;
  margin-top: -30px;
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
