import styled from 'styled-components/native';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export const StyledButton = styled.Pressable`
  background-color: ${colors.red};
  height: 42px;
  margin: 10px 20px;
  padding: 10px;
  border-radius: 10px;
`;

export const TextCustom = styled.Text`
  color: ${colors.white};
  font-weight: 700;
  align-self: center;
`;

export const MainTitleIconG = styled(Icon)`
  position: absolute;
  margin: 46px 144px;
  font-size: 33px;
  color: ${colors.blue_m};
`;
