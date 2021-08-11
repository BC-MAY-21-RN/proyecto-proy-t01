import styled from 'styled-components/native';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ImageContainer = styled.View`
  position: relative;
`;
export const StyledImage = styled.Image`
  width: 55%;
  height: 110%;
`;

export const StyledMainTitle = styled.Text`
  position: absolute;
  margin-top: 30px;
  margin-left: 170px;
  font-size: 28px;
  color: ${colors.white};
  font-weight: 700;
`;

export const StyledTitle = styled(StyledMainTitle)`
  margin-top: 70px;
  margin-left: 242px;
  font-size: 44px;
  color: ${colors.blue_m};
`;

export const StyledChar = styled(StyledTitle)`
  margin-left: 380px;
`;

export const MainTitleIcon = styled(Icon)`
  position: absolute;
  margin-top: 80px;
  margin-left: 342px;
  font-size: 40px;
  color: ${colors.blue_m};
`;
