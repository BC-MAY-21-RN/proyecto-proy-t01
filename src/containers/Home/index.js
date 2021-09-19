import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getDogsbySize,
  getLikedDogs,
  likeDog,
  setValidationSize,
} from '../../library/redux/actions';
import {HomeComponent} from './component';

export const Home = connect(
  ({dogs: {dogsFiltered, favouriteDogs, validation}}) => ({
    validation,
    dogsFiltered,
    favouriteDogs,
  }),
  dispatch =>
    bindActionCreators(
      {getDogsbySize, getLikedDogs, likeDog, setValidationSize},
      dispatch,
    ),
)(HomeComponent);
