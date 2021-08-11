import styled from 'styled-components/native';
import colors from '../../constants/colors';
import {AlertText} from '../TextInput/styledComponent';

export const CheckBoxContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 16px;
`;

export const TextCustom = styled.Text`
  color: ${colors.ligh_grey};
`;

export const AlertTextCheckBox = styled(AlertText)`
  align-self: auto;
  padding-right: 20px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.red};
`;
