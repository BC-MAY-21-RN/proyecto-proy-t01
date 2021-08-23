import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const ModalContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.background_opacity};
  height: 105%;
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const ModalBackground = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${colors.light_red};
  height: 20%;
  width: 40%;
`;

export const Spinner = styled.ActivityIndicator``;

export const TextCustom = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  margin-top: 30px;
`;
