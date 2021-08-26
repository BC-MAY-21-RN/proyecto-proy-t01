import styled from 'styled-components/native';
import colors from '../../constants/colors';
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
`;

export const ProfileContainer = styled.View`
  height: 700px;
  width: 380px;
  border-radius: 20px;
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
  margin-bottom: 30px;
`;

export const LogOutText = styled.Text`
  align-self: center;
  margin-left: 4px;
  font-size: 16px;
  color: ${colors.white};
`;

export const ProfileImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  align-self: center;
`;

export const ProfileIcon = styled(Icon)`
  align-self: center;
  font-size: 20px;
  color: ${colors.white};
`;

export const InputContainerProfile = styled(InputContainer)`
  height: 450px;
`;
export const InputTextContainerProfile = styled(InputTextContainer)`
  margin-top: 50px;
`;
export const ButtonContainerProfile = styled(ButtonContainer)`
  margin-top: 160px;
`;