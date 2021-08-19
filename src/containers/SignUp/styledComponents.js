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
  height: 31%;
`;

export const InputTextContainer = styled.View`
  margin-top: 16px;
`;

export const InputContainer = styled.View`
  height: 66%;
  border-radius: 20px;
  background-color: ${colors.white};
`;

export const ButtonContainer = styled.View`
  margin-top: 0px;
`;
