import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const MainContainerHome = styled.View`
  background-color: ${colors.light_pink};
  height: 100%;
  display: flex;
`;

export const DogContainer = styled.View`
  border-radius: 25px;
  flex-direction: row;
  height: 120px;
  margin: 35px;
  padding: 20px;
  background-color: ${colors.white};
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
  margin-left: 100px;
`;

export const UpperView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-left: 20px;
`;

export const BottomView = styled.View`
  flex-direction: column;
`;
export const StyledImage = styled.Image`
  width: 165px; 
  height: 165px;
  position: absolute;
`;

export const DogName = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 700;

`;

export const ShelterText = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 700;
  
`;

export const HeartIcon = styled.View`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;
export const TextCustom = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 700;
`;
