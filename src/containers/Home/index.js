import React, {useState, useEffect} from 'react';
import {PetList, Filters} from '../../components';
import {MainContainerHome} from './styledComponents';
import {getDogs} from '../../components/helpers/firebaseSignUp';

const Home = () => {
  const [dogsData, setDogsData] = useState();
  const [validation, setValidationSize] = useState('Grande');
  const filter = 'size';

  useEffect(() => {
    getDogs({filter, validation, setDogsData});
  }, [validation]);

  return (
    <MainContainerHome>
      <Filters setSize={setValidationSize} />
      <PetList dogsData={dogsData} />
    </MainContainerHome>
  );
};

export default Home;
