import {
  SIGN_UP,
  LOGIN,
  LOGOUT
} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false
};
export default function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGN_UP:
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return {
        ...state
      };
  }
}
