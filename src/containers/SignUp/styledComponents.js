import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const MainContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${colors.pink};
`;

export const TopContainer = styled.View`
  margin-top: 10px;
  height: 31%;
`;

export const InputTextContainer = styled.View`
  margin-top: 10px;
`;

export const InputContainer = styled.View`
  align-self: center;
  width: 380px;
  height: 500px;
  border-radius: 20px;
  background-color: ${colors.white};
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
`;
