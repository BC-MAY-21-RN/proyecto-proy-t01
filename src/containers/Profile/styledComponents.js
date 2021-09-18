import styled from 'styled-components/native';
import { colors } from '../../library/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  MainContainer,
  InputContainer,
  InputTextContainer,
  ButtonContainer,
} from '../SignUp/styledComponents';

export const MainContainerProfile = styled(MainContainer)`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProfileContainer = styled.View`
  height: 700px;
  width: 380px;
  border-radius: 20px;
  justify-content: center;
  background-color: ${colors.white};
  align-items: center;
  padding: 10px;
`;

export const LogOutContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 74px;
  height: 26px;
  border-radius: 10px;
  justify-content: center;
  align-self: flex-end;
  background-color: ${colors.red};
`;

export const LogOutText = styled.Text`
  align-self: center;
  margin-left: 4px;
  font-size: 16px;
  color: ${colors.white};
`;

export const ProfileImage = styled.Image`
  margin-top: 35px;
  width: 160px;
  height: 160px;
  border-radius: 100px;
  align-self: center;
  align-items: center;
`;

export const ProfileIcon = styled(Icon)`
  align-self: center;
  font-size: 20px;
  color: ${colors.white};
`;

export const UserName = styled.Text`
  align-self: center;
  margin-left: 4px;
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
  color: ${colors.dark};
  margin-top: 15px;
`;

export const UserEmail = styled(UserName)`
  font-family: 'Poppins-Regular';
  font-size: 17px;
  margin-top: 0px;
`;

export const InputContainerProfile = styled(InputContainer)`
  height: 450px;
`;
export const InputTextContainerProfile = styled(InputTextContainer)`
  margin-top: 50px;
`;
export const ButtonContainerProfile = styled(ButtonContainer)`
  margin-top: 315px;
`;
