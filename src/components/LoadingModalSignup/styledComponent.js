import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const ModalContainer = styled.View`
  background-color: ${colors.background_opacity};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 105%;
  width: 100%;
  position: absolute;
  z-index: 1;
`;

export const Spinner = styled.ActivityIndicator`
  border-radius: 20px;
  background-color: ${colors.light_red};
  height: 20%;
  width: 40%;
`;
