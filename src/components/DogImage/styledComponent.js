import styled from 'styled-components/native';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ImageContainer = styled.View`
  position: relative;
`;
export const StyledImage = styled.Image`
  margin-top: 20px;
  width: 100%;
  height: 100%;
`;

export const StyledMainTitle = styled.Text`
  position: absolute;
  margin: 10px 10px;
  font-size: 22px;
  color: ${colors.white};
  font-weight: 700;
`;

export const StyledTitle = styled(StyledMainTitle)`
  margin: 35px 50px;
  font-size: 40px;
  color: ${colors.blue_m};
`;

export const StyledChar = styled(StyledTitle)`
  margin: 35px 174px;
`;

export const MainTitleIcon = styled(Icon)`
  position: absolute;
  margin: 46px 144px;
  font-size: 33px;
  color: ${colors.blue_m};
`;
