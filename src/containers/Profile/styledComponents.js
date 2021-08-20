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
  height: 670px;
  width: 380px;
  border-radius: 20px;
  background-color: ${colors.white};
  align-items: center;
  padding: 30px;
  margin-top: 20px;
`;

export const ProfileImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  align-self: center;
`;

export const ProfileIcon = styled(Icon)`
  align-self: flex-end;
  padding-right: 12px;
  font-size: 34px;
  color: ${colors.white};
`;

export const InputContainerProfile = styled(InputContainer)`
  height: 450px;
`;
export const InputTextContainerProfile = styled(InputTextContainer)`
  margin-top: 50px;
`;
export const ButtonContainerProfile = styled(ButtonContainer)`
  margin-top: 80px;
`;
