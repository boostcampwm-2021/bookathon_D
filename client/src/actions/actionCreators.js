import { TEST_ACTION } from './actionTypes';

export const testAction = (newTask) => (dispatch) => {
    dispatch({ type: TEST_ACTION, payload: newTask });
}