import {request, success, error} from '../baseActions.js';
import {firebaseMethods} from '../../methods/firebase.js';
import { GET_PROFILE, UPDATE_PROFILE } from '../actionTypes/user.js';

export const getProfile = () => async dispatch => {
  const action = GET_PROFILE;
  dispatch(request(action));
  try {
    const response = await firebaseMethods.getProfile();
    if (response) {
      return dispatch(success(action, response));
    }
    return dispatch(error(action, response));
  } catch (error) {
    return dispatch(error(action));
  }
};
export const updateProfile = name => async dispatch => {
  const action = UPDATE_PROFILE;
  dispatch(request(action));
  try {
    const response = await firebaseMethods.updateProfile(name);
    if (response) {
      return dispatch(success(action, response));
    }
    return dispatch(error(action, response));
  } catch (error) {
    return dispatch(error(action));
  }
};
