import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  getAllDogs,
  getLikedDogs,
  getDogsbySize,
  likeDog,
} from '../../library/redux/actions';
import {FavoritesComponent} from './component';

export const Favorites = connect(
  ({dogs: {allDogs, favouriteDogs, validation}}) => ({
    validation,
    allDogs,
    favouriteDogs,
  }),
  dispatch => bindActionCreators({getAllDogs, getLikedDogs, likeDog,getDogsbySize}, dispatch),
)(FavoritesComponent);
