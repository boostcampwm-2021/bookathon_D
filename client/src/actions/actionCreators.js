import {
    SET_TASK,
    START_TIMER,
    INCREMENT_TIMER
} from './actionTypes';

export const setTaskAction = (newTask) => (dispatch) => {
    dispatch({ type: SET_TASK, payload: newTask });
}

export const startTimerAction = () => (dispatch) => {
    const intervalId = setInterval(() => {
        dispatch({ type: INCREMENT_TIMER });
    }, 1000);

    dispatch({ type: START_TIMER, payload: intervalId });
}