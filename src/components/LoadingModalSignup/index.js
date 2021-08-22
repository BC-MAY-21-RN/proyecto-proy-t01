import React from 'react';
import {ModalContainer, Spinner} from './styledComponent';

const LoadingPage = ({status}) => (
  <ModalContainer>
    <Spinner size="large" color="white"></Spinner>
  </ModalContainer>
);

export default LoadingPage;
