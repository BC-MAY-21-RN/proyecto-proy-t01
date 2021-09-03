import styled from 'styled-components/native';
import colors from './../../constants/colors';

export const DogDetailsContainer = styled.View`
  border-radius: 25px;
  flex-direction: row;
  height: 100%;
  margin: 3px;
  padding: 2px;
  background-color: ${colors.white};
  margin-top: 10px;
`;

export const DetailsText = styled.Text`
  color: ${colors.dark};
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  margin-right: 100px;
`;

export const StyledImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  margin-top: 0px;
`;
