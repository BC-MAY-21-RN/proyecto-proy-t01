import {firebaseMethods} from '../../methods/firebase.js';
import {
  GET_ALL_DOGS,
  GET_DOGS_BY_SIZE,
  GET_LIKED_DOGS,
  LIKE_DOG,
} from '../actionTypes/dogs.js';
import {request, success, error} from '../baseActions.js';

export const getAllDogs = () => async dispatch => {
  const action = GET_ALL_DOGS;
  dispatch(request(action));
  try {
    const response = await firebaseMethods.getAllDogs();
    if (response) {
      return dispatch(success(action, response));
    }
    return dispatch(error(action, response));
  } catch (error) {
    return dispatch(error(action));
  }
};

export const getDogsbySize = size => async dispatch => {
  const action = GET_DOGS_BY_SIZE;
  dispatch(request(action));
  try {
    const response = await firebaseMethods.getDogsbySize(size);
    if (response) {
      return dispatch(success(action, response));
    }
    return dispatch(error(action, response));
  } catch (error) {
    return dispatch(error(action));
  }
};
export const getLikedDogs = () => async dispatch => {
  const action = GET_LIKED_DOGS;
  dispatch(request(action));
  try {
    const response = await firebaseMethods.getLikedDogs();
    if (response) {
      return dispatch(success(action, response));
    }
    return dispatch(error(action, response));
  } catch (error) {
    return dispatch(error(action));
  }
};

export const likeDog = (name) => async dispatch => {
  const action = LIKE_DOG;
  dispatch(request(action));
  try {
    const response = await firebaseMethods.likeDog(name);
    if (response) {
      return dispatch(success(action, response));
    }
    return dispatch(error(action, response));
  } catch (error) {
    return dispatch(error(action));
  }
};
