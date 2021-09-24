import { combineReducers } from 'redux';

import timeReducer from './timeReducer.js';
import loginReducer from './loginReducer.js';

export default combineReducers({
  timeState: timeReducer,
  //   loginState: loginReducer,
});
