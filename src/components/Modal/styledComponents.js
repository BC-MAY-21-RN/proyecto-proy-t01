import styled from 'styled-components/native';
import colors from '../../library/constants/colors';

export const CenterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PropietaryImg = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  align-self: center;
  align-items: center;
  background-color: ${colors.light_pink};
  border-color: ${colors.light_pink};
  border-width: 3px;
  margin-bottom: 5px;
`;

export const ModalContainer = styled.View`
  align-items: center;
  background-color: ${colors.red};
  border-radius: 20px;
  margin: 28px;
  padding: 35px;
`;

export const ShelterContactButton = styled.Pressable`
  background-color: ${colors.red};
  height: 46px;
  padding: 12px;
  border-radius: 10px;
  align-self: flex-end;
  margin-right: 20px;
`;

export const CloseButton = styled(ShelterContactButton)`
  background-color: ${colors.ligh_grey};
  align-self: center;
  margin-top: 10px;
  margin-right: 0px;
`;

export const ShelterContactButtonText = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
`;

export const PropietaryText = styled(ShelterContactButtonText)`
  font-size: 20px;
  margin-bottom: -5px;
`;

export const DetailsText = styled(ShelterContactButtonText)`
  font-size: 16px;
  font-family: 'Poppins-Medium';
`;

export const ShelterInfo = styled.View`
  margin-top: 10px;
`;

export const DetailsLine = styled.View`
  flex-direction: row;
`;
