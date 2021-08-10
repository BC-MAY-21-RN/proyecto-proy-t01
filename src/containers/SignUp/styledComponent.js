import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const MainContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${colors.pink};
`;

export const TopContainer = styled.View`
  margin-top: 30px;
  height: 34%;
`;

export const InputContainer = styled.View`
  height: 66%;
  border-radius: 20px;
  background-color: ${colors.white};
`;

export const ButtonContainer = styled.View`
  margin-top: 60px;
`;
