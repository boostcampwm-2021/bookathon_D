import { combineReducers } from 'redux';

import timeReducer from './timeReducer.js';

export default combineReducers({
    timeState: timeReducer
});