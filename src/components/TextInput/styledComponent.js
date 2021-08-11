import styled from 'styled-components/native';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  margin: 10px 20px;
  border-bottom-color: ${colors.ligh_grey};
  `;

export const TextInputCustom = styled.TextInput`
  height: 40px;
  font-size: 16px;
`;

export const AlertText = styled.Text`
  align-self: flex-end;
  padding-right: 20px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.red};
`;

export const InputIcon = styled(Icon)`
  padding-right: 10px;
  font-size: 24px;
  color: ${colors.ligh_grey};
`;
