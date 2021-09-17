import React, {useState} from 'react';
import {Modal} from "react-native";
import {CustomButton, TextInputField, LoadingPage} from '..';
import {CloseButton, ShelterContactButtonText} from '../Modal/styledComponents';
import {span} from '../../i18n/es';
import {Formik} from 'formik';
import {EditProfileContainer, ButtonContainer, EditImage} from './styledComponent';
import {profileValidationSchema} from '../../constants/schemas/profileValidationSchema';
import {handleUpdateProfile} from '../../components/helpers/firebaseSignUp';
const ModalUser = () => {
  const [modalVisible, setModalVisible] = useState(false);
    const handleUpdate = values => {
      const {name} = values;
      setModalVisible((!modalVisible));
      handleUpdateProfile(name)
    };
  
  return (
      <>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <EditProfileContainer>
          <Formik
              validationSchema={profileValidationSchema}
              validateOnMount={true}
              initialValues={{
                name: '',
              }}
              onSubmit={values => handleUpdate(values)}>
            {formProps => (
            <>
              <TextInputField 
                {...formProps} 
                formControlName={span('nameLow')}
                label={span('name')}
                icon="person"
              />
              <ButtonContainer>
                <CloseButton onPress={formProps.handleSubmit}>
                  <ShelterContactButtonText>{span('update')}</ShelterContactButtonText>
                </CloseButton>
                <CloseButton onPress={() => setModalVisible(!modalVisible)}>
                  <ShelterContactButtonText>{span('closeModal')}</ShelterContactButtonText>
                </CloseButton>
              </ButtonContainer>
            </>
            )}
          </Formik>
        </EditProfileContainer>
      </Modal>
      <CustomButton text = {span('editProfile')} onPress={() => setModalVisible(true)} />
    </>
  )
}

export default ModalUser