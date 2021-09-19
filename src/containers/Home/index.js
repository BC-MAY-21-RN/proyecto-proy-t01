import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getDogsbySize,
  getLikedDogs,
  likeDog,
} from '../../library/redux/actions';
import {HomeComponent} from './component';

export const Home = connect(
  ({dogs: {dogsFiltered, favouriteDogs}}) => ({dogsFiltered, favouriteDogs}),
  dispatch =>
    bindActionCreators({getDogsbySize, getLikedDogs, likeDog}, dispatch),
)(HomeComponent);
