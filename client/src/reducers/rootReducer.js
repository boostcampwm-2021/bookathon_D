import { combineReducers } from 'redux';

import timeReducer from './timeReducer.js';
import userReducer from './userReducer.js';

export default combineReducers({
  timeState: timeReducer,
  userState: userReducer,
});
