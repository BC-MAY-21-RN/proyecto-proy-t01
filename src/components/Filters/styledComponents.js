import styled from 'styled-components/native';
import colors from '../../constants/colors';
export const TextSection = styled.Text`
  font-size: 18px;
  align-self: center;
  margin-top: 4px;
  font-family: 'Poppins-Medium';
  color: ${colors.red};

`;

export const SectionItem = styled.TouchableOpacity`
  background-color: ${colors.white};
  width: 100px;
  height: 34px;
  border-radius: 10px;
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
`;
