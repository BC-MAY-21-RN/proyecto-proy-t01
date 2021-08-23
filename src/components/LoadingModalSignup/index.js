import React from 'react';
import {span} from './../../i18n/es';
import {
  ModalContainer,
  ModalBackground,
  Spinner,
  TextCustom,
  SignedUpIcon,
} from './styledComponent';

const LoadingPage = ({status, navigation, setStatus}) => {
  if (status === 'loading') {
    return (
      status === 'loading' && (
        <ModalContainer>
          <ModalBackground>
            <Spinner size="large" color="white"></Spinner>
            <TextCustom>{span('signingUp')}</TextCustom>
          </ModalBackground>
        </ModalContainer>
      )
    );
  } else if (status === 'signedUp') {
    setTimeout(() => {
      setStatus(false);
      // navigation.navigate('Home');
    }, 2000);

    return (
      status === 'signedUp' && (
        <ModalContainer>
          <ModalBackground>
            <SignedUpIcon name="check-circle-outline" />
            <TextCustom>{span('signedUp')}</TextCustom>
          </ModalBackground>
        </ModalContainer>
      )
    );
  }
};

export default LoadingPage;
