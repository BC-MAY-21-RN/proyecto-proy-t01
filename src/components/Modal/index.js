import React, {useState, useEffect} from 'react';
import colors from '../../constants/colors';
import firestore from '@react-native-firebase/firestore';
import {Modal} from "react-native";
import {nullBckg} from '../../constants/img';
import {Icons} from '..';
import { 
    ShelterContactButton, 
    ShelterContactButtonText,
    ModalContainer,
    CenterView,
    CloseButton,
    PropietaryImg,
    PropietaryText,
    ShelterInfo,
    DetailsLine,
    DetailsText
} from './styledComponents';

const ShelterModal = ({shelter}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [shelterData, setShelterData] = useState();
  const getShelters = () => {
    firestore()
      .collection('shelter')
      .doc(shelter)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          setShelterData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getShelters();
  }, [shelter]);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
      >
        <CenterView>
          <ModalContainer>
            <PropietaryImg
              source={{uri: shelterData ? shelterData.propietaryImg : nullBckg}}
            />
          <PropietaryText>{shelterData ? shelterData.propietary : ''}</PropietaryText>
          <ShelterContactButtonText>{shelterData ? shelterData.shelterName : ''}</ShelterContactButtonText>
          <ShelterInfo>
            <DetailsLine>
              <Icons color={colors.white} name={'call'} size={22}/>
              <DetailsText>{shelterData ? shelterData.phone : ''}</DetailsText>
            </DetailsLine>
            <DetailsLine>  
            <Icons color={colors.white} name={'email'} size={22}/>
              <DetailsText>{shelterData ? shelterData.email : ''}</DetailsText>
            </DetailsLine>
            <DetailsLine>  
            <Icons color={colors.white} name={'place'} size={22}/>
              <DetailsText>{shelterData ? shelterData.address : ''}</DetailsText>
            </DetailsLine>
          </ShelterInfo>
            <CloseButton onPress={() => setModalVisible(!modalVisible)}>
              <ShelterContactButtonText>Cerrar</ShelterContactButtonText>
            </CloseButton>
          </ModalContainer>
        </CenterView> 
      </Modal>
      <ShelterContactButton onPress={() => setModalVisible(true)}>
        <ShelterContactButtonText>Contáctanos</ShelterContactButtonText>
      </ShelterContactButton>
    </>
  )
}

export default ShelterModal
