import { SET_TASK } from './actionTypes';

export const testAction = (newTask) => (dispatch) => {
    dispatch({ type: SET_TASK, payload: newTask });
}