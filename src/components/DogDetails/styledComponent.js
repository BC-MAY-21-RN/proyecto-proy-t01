import styled from 'styled-components/native';
import colors from './../../constants/colors';

export const DogDetailsContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${colors.light_pink};
`;

export const StyledImage = styled.ImageBackground`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  max-width: 100%;
  height: 100%;
  margin-top: 0px;
`;

export const LowerDataContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.white};
  height: 53%;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const DogsName = styled.Text`
  display: flex;
  color: ${colors.dark};
  font-size: 30px;
  font-family: 'Poppins-SemiBold';
  margin: 20px 20px 0px 25px;
`;

export const DogsBreed = styled.Text`
  color: ${colors.dark_gray};
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  margin: -25px 25px 20px 25px;
`;

export const HeartIcon = styled.View`
  align-self: flex-end;
  margin-right: 25px;
  margin-top: -35px;
`;

export const GenderText = styled.Text`
  color: ${colors.dark_gray};
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  margin: -25px 0px 10px 25px;
`;

export const BoxesContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const DataBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.pale_gray};
  border-radius: 15px;
  height: 60px;
  width: 110px;
`;

export const DataBoxTextBold = styled.Text`
  color: ${colors.blue_m};
  font-size: 17px;
  font-weight: bold;
  font-family: 'Poppins-SemiBold';
`;

export const DataBoxText = styled.Text`
  color: ${colors.ligh_grey};
  font-size: 15px;
  font-family: 'Poppins-SemiBold';
`;

export const StoryContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px 25px 0px 25px;
`;

export const StoryTitle = styled.Text`
  color: ${colors.blue_m};
  font-size: 17px;
  font-family: 'Poppins-SemiBold';
`;

export const StoryDetails = styled.Text`
  color: ${colors.ligh_grey};
  font-size: 14px;
  font-family: 'Poppins-SemiBold';
`;

export const ShelterBoxContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0px 0px 25px;
`;

export const ShelterContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ShelterTitle = styled.Text`
  color: ${colors.ligh_grey};
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
`;

export const ShelterName = styled.Text`
  color: ${colors.ligh_grey};
  font-size: 15px;
  font-family: 'Poppins-SemiBold';
`;

export const ShelterContactButton = styled.Pressable`
  background-color: ${colors.red};
  height: 46px;
  margin: 10px 20px;
  padding: 12px;
  border-radius: 10px;
`;

export const ShelterContactButtonText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-family: 'Poppins-SemiBold';
`;
