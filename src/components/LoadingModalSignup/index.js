import React from 'react';
import {span} from './../../i18n/es';
import {
  ModalContainer,
  ModalBackground,
  Spinner,
  TextCustom,
} from './styledComponent';

const LoadingPage = ({status}) => (
  <ModalContainer>
    <ModalBackground>
      <Spinner size="large" color="white"></Spinner>
      <TextCustom>{span('signingUp')}</TextCustom>
    </ModalBackground>
  </ModalContainer>
);

export default LoadingPage;
