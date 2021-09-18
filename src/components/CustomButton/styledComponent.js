import styled from 'styled-components/native';
import { colors } from '../../library/constants';


export const StyledButton = styled.Pressable`
  background-color: ${colors.red};
  height: 46px;
  margin: 10px 20px;
  padding: 10px;
  border-radius: 10px;
`;

export const TextCustom = styled.Text`
  font-size: 17px;
  align-self: center;
  color: ${colors.white};
`;

export const DisabledButton = styled.Pressable`
  height: 46px;
  margin: 10px 20px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${colors.dark_gray};
`;
