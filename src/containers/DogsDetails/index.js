import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getDogsbySize,
  getLikedDogs,
  likeDog,
  setValidationSize,
} from '../../library/redux/actions';
import {DogsDetailsComponent} from './component';

export const DogsDetails = connect(
  ({dogs: {favouriteDogs, validation}}) => ({
    validation,
    favouriteDogs,
  }),
  dispatch =>
    bindActionCreators(
      {getDogsbySize, getLikedDogs, likeDog, setValidationSize},
      dispatch,
    ),
)(DogsDetailsComponent);
