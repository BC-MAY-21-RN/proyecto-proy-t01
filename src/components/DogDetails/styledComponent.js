import styled from 'styled-components/native';
import colors from './../../constants/colors';

export const DogDetailsContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  height: 100%;
  background-color: ${colors.light_pink};
`;

export const DogImageContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const DogImage = styled.ImageBackground`
  align-self: center;
  background-color: ${colors.light_pink};
  width: 100%;
  height: 45%;
  position: absolute;
`;

export const LowerDataContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.white};
  height: 55%;
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
  margin: -25px 25px 20px 22px;
`;

export const BackIcon = styled.View`
  justify-content: flex-end;
  margin-left: 20px;
  margin-bottom: 280px;
`;

export const HeartIcon = styled.View`
  align-self: flex-end;
  margin-right: 10px;
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
  height: 58px;
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
  margin: 10px 25px 0px 25px;
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

export const OtherDetailsBoxContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px 0px 25px;
`;

export const OtherDetailsContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const OtherDetailsTitle = styled.Text`
  color: ${colors.blue_m};
  font-size: 12px;
  font-family: 'Poppins-SemiBold';
`;

export const OtherDetailsText = styled.Text`
  color: ${colors.ligh_grey};
  font-size: 15px;
  font-family: 'Poppins-SemiBold';
`;

export const ShelterContactButton = styled.Pressable`
  background-color: ${colors.red};
  height: 46px;
  padding: 12px;
  border-radius: 10px;
  align-self: flex-end;
  margin-right: 20px;
`;

export const ShelterContactButtonText = styled.Text`
  color: ${colors.white};
  font-size: 15px;
  font-family: 'Poppins-SemiBold';
`;