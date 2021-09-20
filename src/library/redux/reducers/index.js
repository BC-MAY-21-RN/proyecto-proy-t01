import {combineReducers} from 'redux';
import dogs from './dogs';
import user from './user';
const rootReducer = combineReducers({
  dogs,
  user,
});

export default rootReducer;
