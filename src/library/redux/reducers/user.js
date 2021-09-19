
import { getNewState } from '../../methods';
import {GET_PROFILE, UPDATE_PROFILE} from '../actionTypes';

const initialState = {
  userData: {},
  loading: false,
};

export default (state = initialState, action) => {
  const {payload: response} = action;
  switch (action.type) {
    case DISPLAY_FLIGHTS.request():
      return getNewState(state, {
        ...state,
        loading: true,
      });
    case DISPLAY_FLIGHTS.error():
      return getNewState(state, {
        flights: [],
        loading: false,
      });
    case DISPLAY_FLIGHTS.success():
      return getNewState(state, {
        flights,
        loading: false,
      });

    default:
      return state;
  }
};
