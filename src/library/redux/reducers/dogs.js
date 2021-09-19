
import { getNewState } from '../../methods';
import {
  GET_ALL_DOGS,
  GET_DOGS_BY_SIZE,
  GET_LIKED_DOGS,
  LIKE_DOG,
} from '../actionTypes';

const initialState = {
  allDogs: [],
  dogsFiltered: [],
  favouriteDogs: [],
  loading: false,
};

export default (state = initialState, action) => {
  const {payload: response} = action;
  switch (action.type) {
    case GET_ALL_DOGS.request():
      return getNewState(state, {
        ...state,
        loading: true,
      });
    case GET_ALL_DOGS.error():
      return getNewState(state, {
        ...state,
        allDogs: [],
        loading: false,
      });
    case GET_ALL_DOGS.success():
      return getNewState(state, {
        ...state,
        allDogs:response,
        loading: false,
      });
    case GET_DOGS_BY_SIZE.request():
      return getNewState(state, {
        ...state,
        loading: true,
      });
    case GET_DOGS_BY_SIZE.error():
      return getNewState(state, {
        ...state,
        dogsFiltered: [],
        loading: false,
      });
    case GET_DOGS_BY_SIZE.success():
      return getNewState(state, {
        ...state,
        dogsFiltered:response,
        loading: false,
      });
    case GET_LIKED_DOGS.request():
      return getNewState(state, {
        ...state,
        loading: true,
      });
    case GET_LIKED_DOGS.error():
      return getNewState(state, {
        ...state,
        favouriteDogs: [],
        loading: false,
      });
    case GET_LIKED_DOGS.success():
      return getNewState(state, {
        ...state,
        favouriteDogs:response,
        loading: false,
      });
    default:
      return state;
  }
};
